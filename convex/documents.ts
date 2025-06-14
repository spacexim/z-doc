import { ConvexError } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const getByIds = query({
  args: { ids: v.array(v.id("documents")) },
  handler: async (ctx, { ids }) => {
    const documents = [];

    for (const id of ids) {
      const document = await ctx.db.get(id);

      if (document) {
        documents.push({ id: document._id, name: document.title });
      } else {
        documents.push({ id, name: "[Removed]" });
      }
    }

    return documents;
  },
});

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("User not authenticated");
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    return await ctx.db.insert("documents", {
      title: args.title ?? "Untitled",
      ownerId: user.subject,
      organizationId,
      initialContent: args.initialContent,
    });
  },
});

export const get = query({
  args: {
    paginationOpts: paginationOptsValidator,
    search: v.optional(v.string()),
    sortBy: v.optional(
      v.union(
        v.literal("newest"),
        v.literal("oldest"),
        v.literal("name-asc"),
        v.literal("name-desc")
      )
    ),
  },
  handler: async (ctx, { search, paginationOpts, sortBy = "newest" }) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("User not authenticated");
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    // For name-based sorting, we need to collect all documents and sort manually
    if (sortBy === "name-asc" || sortBy === "name-desc") {
      let documents;

      if (search && organizationId) {
        documents = await ctx.db
          .query("documents")
          .withSearchIndex("search_title", (q) =>
            q.search("title", search).eq("organizationId", organizationId)
          )
          .collect();
      } else if (search) {
        documents = await ctx.db
          .query("documents")
          .withSearchIndex("search_title", (q) =>
            q.search("title", search).eq("ownerId", user.subject)
          )
          .collect();
      } else if (organizationId) {
        documents = await ctx.db
          .query("documents")
          .withIndex("by_organization_id", (q) =>
            q.eq("organizationId", organizationId)
          )
          .collect();
      } else {
        documents = await ctx.db
          .query("documents")
          .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
          .collect();
      }

      // Sort by name
      const sorted = documents.sort((a, b) => {
        if (sortBy === "name-asc") {
          return a.title.localeCompare(b.title, "zh-CN");
        } else {
          return b.title.localeCompare(a.title, "zh-CN");
        }
      });

      // Manual pagination
      const startIndex = paginationOpts.cursor
        ? parseInt(paginationOpts.cursor as string)
        : 0;
      const endIndex = startIndex + paginationOpts.numItems;
      return {
        page: sorted.slice(startIndex, endIndex),
        isDone: endIndex >= sorted.length,
        continueCursor: endIndex < sorted.length ? endIndex.toString() : "",
      };
    }

    // For time-based sorting, use Convex's built-in ordering
    if (search && organizationId) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("organizationId", organizationId)
        )
        .paginate(paginationOpts);
    }

    if (search) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("ownerId", user.subject)
        )
        .paginate(paginationOpts);
    }

    if (organizationId) {
      const query = ctx.db
        .query("documents")
        .withIndex("by_organization_id", (q) =>
          q.eq("organizationId", organizationId)
        );

      if (sortBy === "oldest") {
        return await query.order("asc").paginate(paginationOpts);
      } else {
        return await query.order("desc").paginate(paginationOpts);
      }
    }

    const query = ctx.db
      .query("documents")
      .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject));

    if (sortBy === "oldest") {
      return await query.order("asc").paginate(paginationOpts);
    } else {
      return await query.order("desc").paginate(paginationOpts);
    }
  },
});

export const removeById = mutation({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("User not authenticated");
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError("Document not found");
    }

    const isOwner = document.ownerId === user.subject;
    const isOrgMember = !!(
      document.organizationId && document.organizationId === organizationId
    );

    if (!isOwner && !isOrgMember) {
      throw new ConvexError("User is not the owner of the document");
    }

    return await ctx.db.delete(args.id);
  },
});

export const updateById = mutation({
  args: { id: v.id("documents"), title: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("User not authenticated");
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError("Document not found");
    }

    const isOwner = document.ownerId === user.subject;
    const isOrgMember = !!(
      document.organizationId && document.organizationId === organizationId
    );

    if (!isOwner && !isOrgMember) {
      throw new ConvexError("User is not the owner of the document");
    }

    return await ctx.db.patch(args.id, { title: args.title });
  },
});

export const getById = query({
  args: { id: v.id("documents") },
  handler: async (ctx, { id }) => {
    const document = await ctx.db.get(id);
    if (!document) {
      throw new ConvexError("Document not found");
    }

    return document;
  },
});

export const getCount = query({
  args: {
    search: v.optional(v.string()),
  },
  handler: async (ctx, { search }) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("User not authenticated");
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    let documents;

    // If the user is part of an organization, we want to search for documents
    if (search && organizationId) {
      documents = await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("organizationId", organizationId)
        )
        .collect();
    }
    // If the user is not part of an organization, we want to search for documents
    else if (search) {
      documents = await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("ownerId", user.subject)
        )
        .collect();
    }
    // If the user is part of an organization, we want to get all documents for that organization
    else if (organizationId) {
      documents = await ctx.db
        .query("documents")
        .withIndex("by_organization_id", (q) =>
          q.eq("organizationId", organizationId)
        )
        .collect();
    }
    // Get documents for the user
    else {
      documents = await ctx.db
        .query("documents")
        .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
        .collect();
    }

    return documents.length;
  },
});

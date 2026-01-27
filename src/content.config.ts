import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const personnes = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/personnes"}),
    schema: ({ image }) => z.object({
        nom: z.string(),
        naissance: z.date(),
        décès: z.date().optional(),
        image: image().optional(),
        professions: z.array(z.enum(["acteur","réalisateur","scénariste","producteur"])).optional(),
        lieu_naissance: z.string().min(2).optional()
    })
})
const films = defineCollection({
    loader:  glob({ pattern: "**/*.md", base: "./src/data/films"}),
    schema: ({ image }) => z.object({
        titre: z.string(),
        sortie: z.date(),
        image: image().optional(),
        genres: z.array(z.enum(["action","romance","policier"])).optional(),
        pays_origine: z.array(z.string().min(2)).optional()
    })
})

export const collections = { personnes, films };
export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
  fullDescription: string;
  category: string;
  image: string;
  images: string[];
  materials: string[];
  year: number;
  duration: string;
}

export const projects: Project[] = [
  {
    slug: "mesa-roble-macizo",
    title: "Mesa de Roble Macizo",
    description:
      "Mesa de comedor de roble macizo con acabado natural para una familia en Madrid.",
    imageUrl: "/images/mesa-de-roble-macizo-.jpg",
    fullDescription:
      "Esta mesa de comedor fue diseñada y fabricada a medida para una familia que buscaba una pieza centerpiece para su comedor. Utilizamos roble macizo de primera calidad, seleccionado por su veta y durabilidad. El diseño incluye patas cónicas que le dan un toque moderno mientras mantiene la calidez de la madera tradicional. El acabado es un aceite natural que protege la madera sin alterar su color ni textura.",
    category: "Muebles a medida",
    image: "/images/mesa-de-roble-macizo-.jpg",
    images: [
      "/images/mesa-de-roble-macizo-.jpg",
      "/images/mesa-de-roble-macizo-.jpg",
      "/images/mesa-de-roble-macizo-.jpg",
    ],
    materials: ["Roble macizo", "Aceite natural", "Metal para refuerzos"],
    year: 2024,
    duration: "3 semanas",
  },
  {
    slug: "reforma-loft-industrial",
    title: "Reforma Loft Industrial",
    description:
      "Transformación completa de un loft industrial con estructuras de madera y metal.",
    fullDescription:
      "Proyecto integral de carpintería para la reforma de un loft industrial en el centro de Madrid. Creamos vigas decorativas, divisiones de espacio, escaleras y muebles a medida que complementan el estilo industrial del espacio. La combinación de madera reclaimed con elementos de metal crea una estética única que respeta la historia del edificio.",
    category: "Carpintería estructural",
    image: "/images/loft-industrial.jpg",
    images: [
      "/images/loft-industrial.jpg",
      "/images/loft-industrial.jpg",
      "/images/loft-industrial.jpg",
      "/images/loft-industrial.jpg",
    ],
    materials: ["Madera reclaimed", "Acero negro", "Roble", "Pino treated"],
    year: 2023,
    duration: "2 meses",
  },
  {
    slug: "armario-clasico-restaurado",
    title: "Armario Clásico Restaurado",
    description:
      "Restauración completa de un armario antiguo de principios del siglo XX.",
    fullDescription:
      "Este armario de nogal de principios del siglo XX llegó a nuestro taller en estado de deterioro avanzado. Realizamos una restauración respetuosa que incluyó: consolidación de la estructura, reparación de las uniones con cola animal tradicional, limpieza y revitalización del acabado original, y fabricación de piezas faltantes utilizando madera de la misma época y características. El resultado es una pieza que conserva su historia y es funcional para el uso diario.",
    category: "Restauración",
    image: "/images/armario-clasico-restaurado.jpg",
    images: [
      "/images/armario-clasico-restaurado.jpg",
      "/images/armario-clasico-restaurado.jpg",
      "/images/armario-clasico-restaurado.jpg",
    ],
    materials: [
      "Nogal original",
      "Cola animal",
      "Cera de abeja",
      "Madera de época",
    ],
    year: 2023,
    duration: "4 semanas",
  },
  {
    slug: "biblioteca-a-medida",
    title: "Biblioteca a Medida",
    description:
      "Sistema de estanterías modular para un estudio de arquitecto.",
    fullDescription:
      "Diseñamos e instalamos un sistema completo de estanterías y almacenaje para un estudio de arquitecto. El proyecto incluye módulos de diferentes tamaños, cajoneros con cerradura, espacios para maquetas y una zona de trabajo integrada. Utilizamos contrachapado de abeto con acabado lacado para una superficie resistente y fácil de limpiar, ideal para un entorno de trabajo profesional.",
    category: "Muebles a medida",
    image: "/images/biblioteca-a-medida-1-1024x576.jpg",
    images: [
      "/images/biblioteca-a-medida-1-1024x576.jpg",
      "/images/biblioteca-a-medida-1-1024x576.jpg",
      "/images/biblioteca-a-medida-1-1024x576.jpg",
    ],
    materials: ["Contrachapado de abeto", "Laca mate", "Metal para herrajes"],
    year: 2024,
    duration: "5 semanas",
  },
  {
    slug: "escalera-madera",
    title: "Escalera de Madera",
    description: "Escalera de caracol de roble para un chalet unifamiliar.",
    fullDescription:
      "Escalera de caracol diseñada para conectar dos plantas de un chalet unifamiliar. La estructura es de roble macizo con contrahuellas de nogal para crear contraste. Cada peldaño fue mecanizado individualmente para asegurar un ajuste perfecto. El diseño incluye una barandilla curva que sigue la línea de la escalera, creando una pieza escultórica que es el centro del hogar.",
    category: "Carpintería estructural",
    image: "/images/escalera-de-madersa.jpg",
    images: [
      "/images/escalera-de-madersa.jpg",
      "/images/escalera-de-madersa.jpg",
      "/images/escalera-de-madersa.jpg",
    ],
    materials: ["Roble macizo", "Nogal", "Metal para estructura"],
    year: 2023,
    duration: "6 semanas",
  },
  {
    slug: "mesa-cafe-restauracion",
    title: "Mesa de Café Restaurada",
    description: "Restauración de una mesa de café de los años 60.",
    fullDescription:
      "Mesa de café de diseño escandinavo de los años 60 que necesitaba una restauración completa. Reparamos las patas, lijamos y aplicamos un nuevo acabado que respeta el tono original. El tapón de madera fue sustituido por uno nuevo fabricado con la misma técnica de chapado. La mesa recuperó su esplendor original y ahora es una pieza destacada en el salón de sus propietarios.",
    category: "Restauración",
    image: "/images/mesa-de-cafe.jpg",
    images: [
      "/images/mesa-de-cafe.jpg",
      "/images/mesa-de-cafe.jpg",
      "/images/mesa-de-cafe.jpg",
    ],
    materials: ["Chapado de haya", "Madera de haya", "Laca transparente"],
    year: 2024,
    duration: "2 semanas",
  },
];

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  return projects.find((project) => project.slug === slug);
}

export async function getProjectsByCategory(
  category: string,
): Promise<Project[]> {
  return projects.filter((project) => project.category === category);
}

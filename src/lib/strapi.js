// const STRAPI_URL =
//   import.meta.env.STRAPI_URL || 'https://tu-proyecto.strapiapp.com';

// export async function fetchAPI(endpoint) {
//   const response = await fetch(`${STRAPI_URL}/api${endpoint}`);
//   return response.json();
// }

import { mockHomepage, mockProyectos, mockFAQ } from '~/data/mockData';

// switch
const USE_MOCK_DATA = true;

export async function getHomepage() {
  if (USE_MOCK_DATA) {
    return mockHomepage;
  }

  // try {
  //   const response = await fetch(`${STRAPI_URL}/api/homepage?populate=*`);
  //
  //   if (!response.ok) {
  //     throw new Error(`Error: ${response.status}`);
  //   }
  //
  //   const data = await response.json();
  //   return data.data.attributes;
  // } catch (error) {
  //   console.error('Error fetching homepage:', error);
  //   return null;
  // }
}

export async function getFAQ() {
  if (USE_MOCK_DATA) {
    return {
      title: mockFAQ.title,
      subtitle: mockFAQ.subtitle,
      faqs: mockFAQ.faqs.sort((a, b) => a.order - b.order),
    };
  }

  // try {
  //   const response = await fetch(`${STRAPI_URL}/api/faqs?sort=order:asc`);
  //
  //   if (!response.ok) {
  //     throw new Error(`Error: ${response.status}`);
  //   }
  //
  //   const data = await response.json();
  //   return data.data.map(faq => ({
  //     id: faq.id,
  //     ...faq.attributes
  //   }));
  // } catch (error) {
  //   console.error('Error fetching FAQs:', error);
  //   return [];
  // }
}

export async function getFeaturedProjects() {
  if (USE_MOCK_DATA) {
    return allMockProjects.filter(project => project.featured);
  }

  // try {
  //   const response = await fetch(`${STRAPI_URL}/api/proyectos?filters[featured][$eq]=true&populate=*&pagination[limit]=3`);
  //
  //   if (!response.ok) {
  //     throw new Error(`Error: ${response.status}`);
  //   }
  //
  //   const data = await response.json();
  //   return data.data.map(proyecto => ({
  //     id: proyecto.id,
  //     ...proyecto.attributes
  //   }));
  // } catch (error) {
  //   console.error('Error fetching featured projects:', error);
  //   return [];
  // }
}

export function getImageUrl(image) {
  // Mientras usamos mock data
  if (USE_MOCK_DATA) {
    // Si es un objeto con propiedad 'url'
    if (image && image.url) {
      return image.url;
    }
    // Si es solo un string
    if (typeof image === 'string') {
      return image;
    }
    // Fallback si no hay imagen
    return '/leaf-placeholder.svg';
    // if (image?.data?.attributes?.url) {
    //   return `${STRAPI_URL}${image.data.attributes.url}`;
    // }
    // return '/leaf-placeholder.svg';
  }
}

// Mock data para todos los proyectos (agregar antes de getAllProjects)
const allMockProjects = [
  // Los 3 proyectos originales
  {
    id: 1,
    title: 'Restaurante Verde Providencia',
    slug: 'restaurante-verde-providencia',
    shortDescription: 'Proyecto de ejemplo mientras se configura Strapi',
    location: 'Las Condes',
    plantCount: 40,
    duration: 5,
    durationType: 'semanas',
    featuredImage: {
      url: '/slide_image-1.jpg',
      alt: 'Restaurante Verde Providencia',
    },
    featured: true,
  },
  {
    id: 2,
    title: 'Oficina Corporativa Sustentable',
    slug: 'oficina-corporativa-sustentable',
    shortDescription: 'Proyecto de ejemplo mientras se configura Strapi',
    location: 'Providencia',
    plantCount: 60,
    duration: 3,
    durationType: 'semanas',
    featuredImage: {
      url: '/slide_image-2.jpg',
      alt: 'Oficina Corporativa',
    },
    featured: true,
  },
  {
    id: 3,
    title: 'Casa Familiar Ecológica',
    slug: 'casa-familiar-ecologica',
    shortDescription: 'Proyecto de ejemplo mientras se configura Strapi',
    location: 'Santiago',
    plantCount: 25,
    duration: 4,
    durationType: 'semanas',
    featuredImage: { url: '/slide_image-3.jpg', alt: 'Casa Familiar' },
    featured: true,
  },
  // Los 3 proyectos adicionales
  {
    id: 4,
    title: 'Centro Comercial Biofílico',
    slug: 'centro-comercial-biofilico',
    shortDescription:
      'Transformación de espacios comerciales con jardines verticales',
    location: 'Las Condes',
    plantCount: 80,
    duration: 6,
    durationType: 'semanas',
    featuredImage: {
      url: '/slide_image-4.jpg',
      alt: 'Centro Comercial Biofílico',
    },
    featured: false,
  },
  {
    id: 5,
    title: 'Hotel Boutique Verde',
    slug: 'hotel-boutique-verde',
    shortDescription: 'Diseño biofílico para experiencia de huéspedes única',
    location: 'Providencia',
    plantCount: 45,
    duration: 4,
    durationType: 'semanas',
    featuredImage: {
      url: '/slide_image-5.jpg',
      alt: 'Hotel Boutique Verde',
    },
    featured: false,
  },
  {
    id: 6,
    title: 'Startup Tech Green Office',
    slug: 'startup-tech-green-office',
    shortDescription:
      'Oficina moderna con elementos naturales para startup tecnológica',
    location: 'Santiago',
    plantCount: 35,
    duration: 3,
    durationType: 'semanas',
    featuredImage: {
      url: '/leaf-placeholder.svg',
      alt: 'Startup Tech Office',
    },
    featured: false,
  },
  {
    id: 7,
    title: 'Startup Tech Green Office',
    slug: 'startup-tech-green-office',
    shortDescription:
      'Oficina moderna con elementos naturales para startup tecnológica',
    location: 'Santiago',
    plantCount: 35,
    duration: 3,
    durationType: 'semanas',
    featuredImage: {
      url: '/leaf-placeholder.svg',
      alt: 'Startup Tech Office',
    },
    featured: false,
  },
  {
    id: 8,
    title: 'Startup Tech Green Office',
    slug: 'startup-tech-green-office',
    shortDescription:
      'Oficina moderna con elementos naturales para startup tecnológica',
    location: 'Santiago',
    plantCount: 35,
    duration: 3,
    durationType: 'semanas',
    featuredImage: {
      url: '/leaf-placeholder.svg',
      alt: 'Startup Tech Office',
    },
    featured: false,
  },
];

// Y cambiar la función getAllProjects():
export async function getAllProjects() {
  if (USE_MOCK_DATA) {
    return allMockProjects;
  }

  // Cuando esté Strapi configurado:
  // const response = await fetch(`${STRAPI_URL}/api/projects?populate=*`);
  // const data = await response.json();
  // return data.data;
}

// const STRAPI_URL =
//   import.meta.env.STRAPI_URL || 'https://tu-proyecto.strapiapp.com';

// export async function fetchAPI(endpoint) {
//   const response = await fetch(`${STRAPI_URL}/api${endpoint}`);
//   return response.json();
// }

import { mockHomepage, mockFAQ } from '~/data/mockData';
import { proyectos } from '~/data/mockProyectData';

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
    return proyectos.slice(0, 3); // <-- CAMBIAR ESTO
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

export async function getAllProjects() {
  if (USE_MOCK_DATA) {
    return proyectos;
  }

  // try {
  //   const response = await fetch(`${STRAPI_URL}/api/proyectos?populate=*`);
  //
  //   if (!response.ok) {
  //     throw new Error(`Error: ${response.status}`);
  //   }
  //
  //   const data = await response.json();
  //   return data.data;
  // } catch (error) {
  //   console.error('Error fetching projects:', error);
  //   return [];
  // }
}

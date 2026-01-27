// Utilidad para manejar rutas de assets con el base path
const BASE_URL = import.meta.env.BASE_URL;

export const getAssetPath = (path) => {
  // Si la ruta ya incluye el base o es una URL completa, retornarla tal cual
  if (path.startsWith('http') || path.startsWith(BASE_URL)) {
    return path;
  }
  // Remover el slash inicial si existe y concatenar con BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}${cleanPath}`;
};

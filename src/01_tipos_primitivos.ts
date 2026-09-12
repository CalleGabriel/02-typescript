/**
 * ============================================================================
 * 🥊 RETO 01: Tipos Primitivos, Inferencia y Arrays en TypeScript
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN:
 * El sistema web anterior de la UETS sumaba calificaciones en JavaScript vanilla
 * sin tipos ("10" + "8" = "108"), produciendo errores graves en los promedios.
 * Tu misión es declarar tus variables personales con tipos explícitos, formatear
 * tus datos e implementar el cálculo de promedios con tipado estricto.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Lee atentamente cada bloque marcado con `// TODO:`.
 * 2. Escribe o completa el código TypeScript según las especificaciones.
 * 3. Ejecuta en tu terminal: `pnpm run start:01` para verificar los tests.
 */

// ============================================================================
// PASO 1: Tipado de Variables Personales e Impresión de Resumen
// ============================================================================

export const nombreEstudiante: string = "Gabriel Calle";       
export const edadEstudiante: number = 17;          
export const promedioObjetivo: number = 8;        
export let estaMatriculado: boolean = true;    


export function obtenerResumenPersonal(): string {
  let estadoTexto = estaMatriculado ? "MATRICULADO" : "NO_MATRICULADO";
  
  let formato = `👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} años | 🎯 Meta: ${promedioObjetivo}/10 | 📋 Estado: ${estadoTexto}`;
  
  return formato;
}

// ============================================================================
// PASO 2: Función para Calcular el Promedio
// ============================================================================

export function calcularPromedio(notas: readonly number[]): number {
  // Validación de arreglo vacío utilizando operador de igualdad estándar
  if (notas.length == 0) {
    return 0;
  }

  let suma = 0;
  
  // Recorrido seguro del arreglo inmutable
  for (const nota of notas) {
    suma += nota;
  }

  let promedio = suma / notas.length;
  let resultadoRedondeado = Number(promedio.toFixed(2));

  return resultadoRedondeado;
}
// ============================================================================
// PASO 3: Formateador de Ficha Técnica
// ============================================================================
export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  let nombreMayusculas = nombre.toUpperCase();
  let estadoTexto = activo ? "MATRICULADO" : "RETIRADO";
  let formato = `[FICHA UETS] ${nombreMayusculas} (${edad} años) - Paralelo: ${paralelo} - Estado: ${estadoTexto}`;
  return formato;
}

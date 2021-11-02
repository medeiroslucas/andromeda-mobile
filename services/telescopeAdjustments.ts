export const MIN_DEG_AZ = 0.1125;
export const MIN_DEG_ALT  = 0.1125;

export function moveUp(coord: number): number {
    return coord + MIN_DEG_ALT;
}

export function moveDown(coord: number): number {
    return coord - MIN_DEG_ALT;
}

export function moveLeft(coord: number): number {
    return coord - MIN_DEG_AZ;
}

export function moveRight(coord: number): number {
    return coord + MIN_DEG_AZ;
}

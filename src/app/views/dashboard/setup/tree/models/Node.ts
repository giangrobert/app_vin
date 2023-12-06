export class FlatDirNode
{
    id: number;
    codigo: string;
    nombre: string;
    nivel: number;
    estado: number;
    Parent_gerarquia_id: number;
    expandable: boolean;
    level: number;
    last: boolean;
}

export class DirNode extends FlatDirNode
{
    // id: number,
    // codigo: string,
    // nombre: string;
    // nivel: number,
    // estado: number,
    // expandable?: boolean;
    // level?: number;
    // last?: boolean;
    children?: DirNode[];
}
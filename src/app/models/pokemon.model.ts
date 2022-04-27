export interface Pokemon {
  id?: number;
  name?: string;
  image?: string;
  type?: string;
  hp?: number;
  attack?: number;
  defense?: number;
  idAuthor?: number;
  created_at?: string;
  updated_at?: string;
}

export interface Types {
  name?: string;
  value?: string
}
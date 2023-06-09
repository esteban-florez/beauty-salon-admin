export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export type ReviewType = Database['public']['Tables']['reviews']['Row']

export interface Database {
  public: {
    Tables: {
      reviews: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          name: string
          review: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
          name: string
          review: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string
          review?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

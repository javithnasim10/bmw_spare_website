-- Create parts table for BMW spare parts
create table if not exists public.parts (
  id uuid primary key default gen_random_uuid(),
  part_number text not null unique,
  name text not null,
  description text,
  category_id uuid references public.categories(id) on delete set null,
  price decimal(10, 2),
  stock_quantity integer default 0,
  image_url text,
  compatibility text, -- BMW models compatible with this part
  manufacturer text,
  condition text default 'New', -- New, Used, Refurbished
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.parts enable row level security;

-- Public read access for parts
create policy "parts_select_all"
  on public.parts for select
  using (true);

-- Only authenticated users can insert/update/delete
create policy "parts_insert_auth"
  on public.parts for insert
  with check (auth.uid() is not null);

create policy "parts_update_auth"
  on public.parts for update
  using (auth.uid() is not null);

create policy "parts_delete_auth"
  on public.parts for delete
  using (auth.uid() is not null);

-- Create index for faster searches
create index if not exists parts_part_number_idx on public.parts(part_number);
create index if not exists parts_category_id_idx on public.parts(category_id);
create index if not exists parts_name_idx on public.parts using gin(to_tsvector('english', name));

-- Create categories table for BMW part categories
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  image_url text,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.categories enable row level security;

-- Public read access for categories
create policy "categories_select_all"
  on public.categories for select
  using (true);

-- Only authenticated users can insert/update/delete
create policy "categories_insert_auth"
  on public.categories for insert
  with check (auth.uid() is not null);

create policy "categories_update_auth"
  on public.categories for update
  using (auth.uid() is not null);

create policy "categories_delete_auth"
  on public.categories for delete
  using (auth.uid() is not null);

-- Insert default BMW categories
insert into public.categories (name, description, image_url) values
  ('Engine Parts', 'High-performance engine components and accessories', '/placeholder.svg?height=200&width=300'),
  ('Transmission', 'Transmission systems and related components', '/placeholder.svg?height=200&width=300'),
  ('Suspension', 'Suspension components for optimal handling', '/placeholder.svg?height=200&width=300'),
  ('Brakes', 'Premium brake systems and components', '/placeholder.svg?height=200&width=300'),
  ('Electrical', 'Electrical systems and components', '/placeholder.svg?height=200&width=300'),
  ('Body Parts', 'Exterior and interior body components', '/placeholder.svg?height=200&width=300'),
  ('Exhaust', 'Performance exhaust systems', '/placeholder.svg?height=200&width=300'),
  ('Cooling', 'Cooling system components', '/placeholder.svg?height=200&width=300')
on conflict do nothing;

-- Create contacts table for contact form submissions
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status text default 'new', -- new, read, replied
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.contacts enable row level security;

-- Anyone can insert contact submissions
create policy "contacts_insert_all"
  on public.contacts for insert
  with check (true);

-- Only authenticated users can read/update contacts
create policy "contacts_select_auth"
  on public.contacts for select
  using (auth.uid() is not null);

create policy "contacts_update_auth"
  on public.contacts for update
  using (auth.uid() is not null);

create policy "contacts_delete_auth"
  on public.contacts for delete
  using (auth.uid() is not null);

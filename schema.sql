-- FedXaaS Waitlist Table
-- Run this in your Supabase SQL Editor

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  company text,
  title text,
  website text,
  role text,
  challenge text,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow anonymous inserts (for the public form)
create policy "Allow anonymous inserts" on waitlist
  for insert
  with check (true);

-- Only authenticated users (admin) can read
create policy "Allow authenticated reads" on waitlist
  for select
  using (auth.role() = 'authenticated');

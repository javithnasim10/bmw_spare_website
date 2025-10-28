-- Insert sample BMW parts
insert into public.parts (part_number, name, description, category_id, price, stock_quantity, compatibility, manufacturer, condition, image_url)
select 
  'BMW-ENG-001',
  'M Performance Air Filter',
  'High-flow air filter for improved engine performance',
  (select id from public.categories where name = 'Engine Parts' limit 1),
  89.99,
  25,
  'BMW 3 Series (F30), 4 Series (F32), 5 Series (F10)',
  'BMW M Performance',
  'New',
  '/placeholder.svg?height=300&width=400'
where not exists (select 1 from public.parts where part_number = 'BMW-ENG-001');

insert into public.parts (part_number, name, description, category_id, price, stock_quantity, compatibility, manufacturer, condition, image_url)
select 
  'BMW-BRK-001',
  'M Performance Brake Pads',
  'High-performance ceramic brake pads for superior stopping power',
  (select id from public.categories where name = 'Brakes' limit 1),
  249.99,
  15,
  'BMW M3, M4, M5',
  'Brembo',
  'New',
  '/placeholder.svg?height=300&width=400'
where not exists (select 1 from public.parts where part_number = 'BMW-BRK-001');

insert into public.parts (part_number, name, description, category_id, price, stock_quantity, compatibility, manufacturer, condition, image_url)
select 
  'BMW-SUS-001',
  'Adaptive Suspension Kit',
  'Complete adaptive suspension system for enhanced handling',
  (select id from public.categories where name = 'Suspension' limit 1),
  1899.99,
  5,
  'BMW 5 Series (G30), 7 Series (G11)',
  'BMW Original',
  'New',
  '/placeholder.svg?height=300&width=400'
where not exists (select 1 from public.parts where part_number = 'BMW-SUS-001');

insert into public.parts (part_number, name, description, category_id, price, stock_quantity, compatibility, manufacturer, condition, image_url)
select 
  'BMW-EXH-001',
  'M Performance Exhaust System',
  'Titanium exhaust system with enhanced sound and performance',
  (select id from public.categories where name = 'Exhaust' limit 1),
  3499.99,
  3,
  'BMW M2, M3, M4',
  'Akrapovic',
  'New',
  '/placeholder.svg?height=300&width=400'
where not exists (select 1 from public.parts where part_number = 'BMW-EXH-001');

insert into public.parts (part_number, name, description, category_id, price, stock_quantity, compatibility, manufacturer, condition, image_url)
select 
  'BMW-ELC-001',
  'LED Headlight Assembly',
  'Full LED adaptive headlight assembly',
  (select id from public.categories where name = 'Electrical' limit 1),
  1299.99,
  8,
  'BMW 3 Series (G20), 4 Series (G22)',
  'BMW Original',
  'New',
  '/placeholder.svg?height=300&width=400'
where not exists (select 1 from public.parts where part_number = 'BMW-ELC-001');

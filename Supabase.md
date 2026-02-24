# Création de la base SQL dans SupaBase,

## visualisation graphique de la base :

<img width="494" height="164" alt="image" src="https://github.com/user-attachments/assets/8e925b0a-d190-46ec-a937-641f1f3cebb3" />

## Dans le SQL Editor on insère le code suivant :

<img width="529" height="573" alt="image" src="https://github.com/user-attachments/assets/0eb81559-279d-4591-b4d9-1f9b5d2005b8" />

```
create table profiles (
  id uuid primary key references auth.users(id),
  pseudo text
);
create function create_profile()
returns trigger as $$
begin
  insert into profiles (id, pseudo)
  values (new.id, new.raw_user_meta_data->>'pseudo');
  return new;
end;
$$ language plpgsql;

create trigger on_user_created
after insert on auth.users
for each row execute procedure create_profile();
```

**Dans le code login.html, on met la clé public et l'URL de l'API dans le code pour faire la liaison!**

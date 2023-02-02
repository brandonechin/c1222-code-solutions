SELECT "addresses"."line1",
       "addresses"."district",
       "cities"."name" as "city"
  from "addresses"
  join "cities" using ("cityId");

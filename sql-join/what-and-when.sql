SELECT "films"."releaseYear",
       "genres"."name" as "genre",
       "films"."title"
  from "films"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
 where "title" = 'Boogie Amelie';

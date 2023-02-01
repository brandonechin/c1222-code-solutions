SELECT "countryId",
count("name") as "totalCities"
from "cities"
group by "countryId";

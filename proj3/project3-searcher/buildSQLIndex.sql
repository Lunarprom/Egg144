-- buildSQLIndex
CREATE TABLE IF NOT EXISTS Item_Location(
	ItemID	VARCHAR(200) NOT NULL;
	Location 	GEOMETRY NOT NULL;
	SPATIAL INDEX(Location)
)	ENGINE=MyISAM;

INSERT INTO Item_Location (ItemID, Location)
SELECT ItemID, Point(Latitude, Longitude) 
FROM  Item
WHERE Latitude is NOT NULL AND Longitude is NOT NULL;

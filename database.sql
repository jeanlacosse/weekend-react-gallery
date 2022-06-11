CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    path VARCHAR(150),
    description VARCHAR(250),
    likes INTEGER DEFAULT 0
);

INSERT INTO gallery (
    path, description
)
VALUES
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/baloons.jpg', 'A baloon and a dog at a birthday party.'),
('images/dandelion.jpg', 'Spring dandelions in Kenwood park.'),
('images/mimosa.jpg', 'The wife sipping a mimosa on a Sunday morning.'),
('images/plants.jpg', 'A collection of houseplants in the dining room.'),
('images/tea.jpg', 'Pot of tea and pastries while studying.');
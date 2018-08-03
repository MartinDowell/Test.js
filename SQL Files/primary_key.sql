CREATE TABLE IF NOT EXISTS cups  (
  id              INT AUTO_INCREMENT    PRIMARY KEY,
  cup_pattern     VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS pots  (
  id              VARCHAR(25),
  pot_pattern     INT AUTO_INCREMENT,
  PRIMARY KEY(pot_pattern)
);

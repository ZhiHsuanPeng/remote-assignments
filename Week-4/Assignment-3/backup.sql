-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `article_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`article_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'Lorem Ipsum 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',1),(2,'Dolor Sit Amet 1','Duis aute irure dolor in reprehenderit.',2),(3,'Consectetur Adipiscing 1','Excepteur sint occaecat cupidatat non proi .',3),(4,'Elit Sed Do 1','Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4),(5,'Tempor Incididunt 1','Ut enim ad minim veniam, quis nostrud eoris nisi.',5),(6,'Lorem Ipsum 2','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',1),(7,'Dolor Sit Amet 2','Duis aute irure dolor in reprehen fugiat nulla pariatur.',2),(8,'Consectetur Adipiscing 2','Excepteur sint occaecat cupidatat nonicia st laborum.',3),(9,'Elit Sed Do 2','Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4),(10,'Tempor Incididunt 2','Ut enim ad minim veniam, quis nostrud  nisi ut aliquip ex ea commodo consequat.',5),(11,'Lorem Ipsum 3','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',1),(12,'Dolor Sit Amet 3','Duis aute irure dolor in reprehenderit in  nulla pariatur.',2),(13,'Consectetur Adipiscing 3','Excepteur sint occaecat ca qui officia deserunt mollit anim id est laborum.',3),(14,'Elit Sed Do 3','Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4),(15,'Tempor Incididunt 3','Ut enim ad minim veniam, quis nostrud ut aliquip ex ea commodo consequat.',5),(16,'Lorem Ipsum 4','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',1),(17,'Dolor Sit Amet 4','Duis aute irure dolor in reprehenderit in  fugiat nulla pariatur.',2),(18,'Consectetur Adipiscing 4','Excepteur sint occaecat c qui officia deserunt mollit anim id est laborum.',3),(19,'Elit Sed Do 4','Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4),(20,'Tempor Incididunt 4','Ut enim ad minim veniam, quis nisi ut aliquip ex ea commodo consequat.',5),(21,'Lorem Ipsum 5','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',1),(22,'Dolor Sit Amet 5','Duis aute irure dolor in  dolore eu fugiat nulla pariatur.',2),(23,'Consectetur Adipiscing 5','Excepteur sint  culpa qui officia deserunt mollit anim id est laborum.',3),(24,'Elit Sed Do 5','Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4),(25,'Tempor Incididunt 5','Ut enim ad minim veniam, q laboris nisi ut aliquip ex ea commodo consequat.',5),(26,'Lorem Ipsum 6','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',1),(27,'Dolor Sit Amet 6','Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur.',2),(28,'Consectetur Adipiscing 6','Excepteur sint, sunt in culpa qui officia deserunt mollit anim id est laborum.',3),(29,'Elit Sed Do 6','Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4),(30,'Tempor Incididunt 6','Ut enim ad minim veniam,  nisi ut aliquip ex ea commodo consequat.',5);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jeremy@gmail.com','user1234'),(2,'jason@gmail.com','user1234'),(3,'meggy@gmail.com','user1234'),(4,'amy@gmail.com','user1234'),(5,'admin@gmail.com','admin1234'),(6,'test@gmail.com','tesingsignup');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-19 11:56:32

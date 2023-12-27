/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 8.0.30 : Database - mysql_react_express
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `role` */

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE armscii8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

/*Data for the table `role` */

insert  into `role`(`id`,`title`) values (1,'admin'),(2,'registered');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) COLLATE armscii8_bin NOT NULL,
  `email` varchar(255) COLLATE armscii8_bin NOT NULL,
  `password` varchar(255) COLLATE armscii8_bin NOT NULL,
  `forget_password_token` varchar(255) COLLATE armscii8_bin DEFAULT NULL,
  `role` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_role` (`role`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

/*Data for the table `user` */

insert  into `user`(`id`,`fullname`,`email`,`password`,`forget_password_token`,`role`) values (1,'Deepak singh Kushwah','deepak@localhost.com','$2a$10$DoCU1urS8GoFBECX0eqE/edx6UEMP18vILF6MkYOXKuOGmfbRafqu',NULL,1),(2,'Ashish Yadav','ashish@localhost.com','$2a$10$DoCU1urS8GoFBECX0eqE/edx6UEMP18vILF6MkYOXKuOGmfbRafqu',NULL,2),(3,'Test One','test1@localhost.com','$2a$10$DoCU1urS8GoFBECX0eqE/edx6UEMP18vILF6MkYOXKuOGmfbRafqu',NULL,2);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

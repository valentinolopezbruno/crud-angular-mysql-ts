-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2023 a las 21:39:58
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cursoangularproductos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` int(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `imagen`, `created_at`) VALUES
(7, 'Ñoquis', 131, 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/noquis-beneficios.jpg.webp?itok=KyQqukcK', '2023-06-27 16:01:16'),
(8, 'Ñoquis', 1900, 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/noquis-beneficios.jpg.webp?itok=KyQqukcK', '2023-06-27 18:39:08'),
(9, 'Ñoquiss', 1900, 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/noquis-beneficios.jpg.webp?itok=KyQqukcK', '2023-06-27 19:34:18'),
(10, 'Ñoquiszzz', 1900, 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/noquis-beneficios.jpg.webp?itok=KyQqukcK', '2023-06-27 19:34:44');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 01/02/2021 às 04:43
-- Versão do servidor: 10.4.17-MariaDB
-- Versão do PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `comments`
--

DROP DATABASE IF EXISTS comments;
CREATE DATABASE comments;


USE comments;
-- --------------------------------------------------------

--
-- Estrutura para tabela `comments`
--

CREATE TABLE `comments` (
  `ID` int(10) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `comments`
--

INSERT INTO `comments` (`ID`, `comment`) VALUES
(1, 'Num ninho de mafagafos há sete mafagafinhos. Quando a mafagafa gafa, gafam os sete mafagafinhos.'),
(4, 'A aranha arranha a rã. A rã arranha a aranha. Nem a aranha arranha a rã. Nem a rã arranha a aranha.');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comments`
--
ALTER TABLE `comments`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2026 at 02:19 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_website`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `last_scan_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `user_email`, `title`, `content`, `image_path`, `created_at`, `updated_at`, `last_scan_at`) VALUES
(14, 'Chel@gmail.com', 'Debut: Mercedes-AMG Petronas F1 Team Unveils Bold 2026 Teamwear Collection', 'As the Mercedes-AMG Petronas F1 Team prepares for the highly anticipated 2026 regulation reset, they have officially debuted their new teamwear collection. This latest range marks a significant aesthetic and functional shift, mirroring the team\'s forward-looking \"clean sheet\" approach to the new era of Formula 1.\n\n1) A Fusion of Performance and Heritage\nThe 2026 collection retains the iconic \"Silver Arrows\" identity while introducing modern design elements that emphasize the team\'s transition toward a more sustainable and technologically advanced future.\nRefined Aesthetic: The new kit features a deeper metallic silver base accented by the signature PETRONAS emerald green, now integrated with geometric patterns that mimic the airflow visualizations of the 2026 \"Active Aero\" chassis designs.\nAdvanced Materials: Developed in collaboration with technical partners, the garments utilize recycled high-performance fabrics designed for maximum breathability and durability in the diverse climates of the global F1 calendar.\n\n2) Sustainability at the Core\nIn line with the 2026 mandate for 100% sustainable fuels on the track, the teamwear collection doubles down on environmental responsibility.\nCircular Manufacturing: A significant portion of the collection is crafted from ocean-bound plastics and organic cotton, reducing the carbon footprint of the team’s off-track operations.\nWeight Reduction: Just as the 2026 cars are shedding 30kg, the teamwear has been engineered to be 15% lighter than previous iterations, utilizing bonded seams instead of traditional stitching to enhance comfort for the 1,500-strong workforce in Brackley and Brixworth.\n\n3) The Driver\'s Perspective\nBoth George Russell and Kimi Antonelli were involved in the final fit-testing of the race suits and travel gear. Russell noted that the ergonomic design of the 2026 race suits provides better mobility for the increased physical demands of the new, more agile 2026 cars. For Antonelli, the debut of this collection represents his official entry into the senior team, wearing the colors that will define the next chapter of his career.', '1769497317_697862e596530.jpg', '2026-01-27 07:01:57', '2026-01-28 23:58:02', '2026-01-28 23:58:02'),
(15, 'Kyzh@gmail.com', 'Drivers Q&A: George Russell’s Personal Favorite Racing Tracks', 'As George Russell prepares for a high-stakes 2026 season, he sat down to share which circuits on the global calendar ignite his passion for driving. While every track presents a unique challenge, Russell’s favorites share a common theme: high-speed commitment and a \"flowing\" rhythm.\n\n1) Silverstone (United Kingdom) – The Home Hero\nUnsurprisingly, Silverstone sits at the top of Russell\'s list. Beyond the emotional connection of his home race and the roaring British fans, he cites the legendary Maggots-Beckets-Chapel sequence as the ultimate test of a modern Formula 1 car’s aerodynamic prowess.\n\"It’s fast, it’s flowing, and it’s where you truly feel the car come alive,\" Russell remarked during a recent Mercedes fan Q&A.\n\n2) Spa-Francorchamps (Belgium) – The Pure Driver\'s Tests\nRussell has a storied history with Spa, including his first career podium in 2021. He classifies the Belgian circuit as a \"Top Tier\" track due to its massive elevation changes and the legendary Eau Rouge-Raidillon climb. For Russell, Spa represents the \"old school\" grit of racing, where the margin for error is razor-thin and the reward for bravery is immense.\n\n3) Suzuka (Japan) – Technical Perfection\nFor a driver known for his analytical and precise style, Suzuka is a natural favorite. Russell appreciates the technical complexity of the \"S\" Curves in Sector 1. He views Suzuka as a \"perfectionist\'s track\" where a single mistake at the start of the lap can ruin the flow of every subsequent corner.', '1769497582_697863eede37d.jpg', '2026-01-27 07:06:22', '2026-01-29 00:10:58', '2026-01-29 00:10:58'),
(17, 'Chel@gmail.com', 'Leadership Insights: How Toto Wolff Manages to Lead a Champion Team', 'Leading a high-performance organization in the relentless environment of Formula 1 requires more than just technical knowledge; it requires a sophisticated approach to human psychology and organizational culture. Since joining Mercedes in 2013, Toto Wolff has pioneered a leadership model that balances high-stakes pressure with a supportive internal environment.\r\n\r\n1) The \"Zero Blame\" Culture\r\nThe cornerstone of Wolff’s philosophy is the \"See it, say it, fix it\" mantra. In a sport where a millisecond error can cost a championship, the natural instinct is to point fingers. Wolff has spent over a decade instilling a Zero Blame Culture, where the focus is shifted entirely away from the individual and toward the system.\r\n\r\n2) Radical Transparency and Self-Reflection\r\nWolff leads by example through radical honesty. He is often the first to admit his own errors during team debriefs, setting a standard for transparency. By acknowledging his own contributions to setbacks, he empowers his engineers and strategists to do the same. This approach prevents \"toxic positivity\" and ensures that the team’s data-driven decisions are based on reality, not ego.\r\n\r\n3) People-First Management\r\nUltimately, Wolff emphasizes that \"an F1 team isn\'t about running cars; it\'s about running people.\" He prioritizes the mental well-being and professional development of his 1,500-strong workforce. By providing an environment where individuals feel valued and supported, he ensures that the team remains resilient, even during the difficult transition toward the 2026 regulation shift.', '1769587245_6979c22defa6e.jpg', '2026-01-28 08:00:45', '2026-01-29 00:09:30', '2026-01-29 00:09:30'),
(18, 'Ciaa@gmail.com', 'A Strong Start: Mercedes W17 Hits the Ground Running at 2026 Barcelona Shakedown', 'The Mercedes-AMG Petronas F1 Team has successfully completed a highly productive opening to the 2026 era, demonstrating both reliability and early pace during the official shakedown in Barcelona. With the introduction of the new W17 chassis and the highly anticipated 2026 power unit, the team focused on validating systems and gathering baseline data for the regulation reset.\r\n\r\n1) Reliability and Productivity\r\nDistance Covered: Mercedes was among the most active teams on track, with George Russell and Kimi Antonelli completing a combined total of over 150 laps—exceeding 700km of running on the first day.\r\nSystem Checks: The W17 ran reliably throughout its program, allowing the engineers to conduct extensive long-run simulations and aerodynamic assessments without significant technical interruptions.\r\n\r\n2) Driver Feedback and Early Pace\r\nQuick Times: George Russell set the second-fastest time of the opening session, clocking a 1m 18.696s, which signaled a competitive start for the Silver Arrows.\r\nIntuitive Handling: Russell noted that the 2026 car felt \"intuitive\" to drive and that the team had established a solid foundation for further development.\r\nPromising Package: Debutant Kimi Antonelli praised the work done at the Brackley and Brixworth factories, noting that the overall package felt robust and capable right out of the box.', '1769587734_6979c416988c0.jpg', '2026-01-28 08:08:54', '2026-01-28 08:14:58', '2026-01-28 08:14:58'),
(21, 'Kyzh@gmail.com', 'Drivers Q&A: Kimi Antonelli on the 2025 Debut and the 2026 Evolution', 'As the youngest driver on the 2025 grid, Andrea Kimi Antonelli carries the weight of immense expectation. In a recent Q&A, the Italian prodigy shared his reflections on his rookie campaign and his strategic outlook as Mercedes transitions into the pivotal 2026 regulation cycle.\r\n\r\n1) Refining the Rookie Campaign\r\nFor Antonelli, 2025 is defined by a steep learning curve and the transition from a \"prodigy\" to a professional athlete within the Mercedes ecosystem.\r\nManaging Expectations: Antonelli emphasized that his primary goal for 2025 is consistency rather than immediate podiums, focusing on \"absorbing every bit of data\" provided by the Mercedes engineering team.\r\nThe Physical Leap: He noted the significant step up in physical demand from Formula 2, particularly regarding neck strength and the mental stamina required for the longer Grand Prix distances.\r\n\r\n2) The Vision for 2026 and Beyond\r\nWhile 2025 is about building a foundation, Antonelli views 2026 as the year where the playing field levels for the entire grid.\r\nA New Technical Era: He expressed excitement for the W17 and the 2026 power unit, noting that the \"clean sheet\" regulations allow him to grow with the car’s development alongside his more experienced teammate.\r\nLearning from Russell: Antonelli highlighted the value of George Russell’s mentorship, stating that observing Russell’s analytical approach to car setup has been instrumental in his own preparation for the 2026 technical shift.', '1769645114_697aa43a47d6c.jpg', '2026-01-29 00:05:14', '2026-01-29 00:14:02', '2026-01-29 00:14:02'),
(22, 'Ciaa@gmail.com', '2026 WDC Predictions: George Russell Remains a Top Contender for the Championship', 'As the 2026 Formula 1 season approaches, the spotlight is intensifying on George Russell. With a radical new set of regulations on the horizon, the Mercedes-AMG Petronas driver has emerged not only as a bookmaker favorite but also as a clear choice for fans hoping to see a new World Drivers\' Champion (WDC).\r\n\r\n1) The Momentum of the \"Silver Resurgence\"\r\nGeorge Russell’s status as a title frontrunner is backed by a string of impressive performances throughout 2024 and 2025. Following his standout victories in Canada and Singapore last season, Russell has proven he can compete at the highest level even when the technological margins are razor-thin. Market analysts and bookmakers currently place Russell in a \"neck-and-neck\" duel with Max Verstappen, with opening odds reflecting a near 27% implied probability of Russell taking the crown. This confidence stems from two key factors:\r\nMercedes\' Power Unit Legacy: Historically, Mercedes has excelled during major regulation resets (notably in 2014). With the 2026 focus shifting toward a 50/50 hybrid power split, many believe the Brixworth-engineered powertrain will once again be the class of the field.\r\nEstablished Leadership: Now entering his fifth season with the Silver Arrows, Russell is no longer the \"apprentice.\" He has transitioned seamlessly into the de facto team leader role, providing a stable foundation as Kimi Antonelli continues his development.\r\n\r\n2) Why Russell Remains a Fan Favorite\r\nBeyond the technical data, Russell’s \"cerebral\" approach to racing has won over a significant portion of the global fanbase. Often compared to the tactical brilliance of Alain Prost, Russell is widely respected for his:\r\nConsistency: His ability to maximize points even on \"off\" weekends has become his trademark.\r\nStrategic Racecraft: Fans have noted his shift from aggressive risk-taking to a smarter, more calculated style of overtaking that prioritizes long-term championship gains.\r\nResilience: Having navigated the difficult \"ground-effect\" era with Mercedes, his journey to a potential title is seen as a well-earned reward for his loyalty and persistence.', '1769648653_697ab20d0dd69.jpg', '2026-01-29 01:04:13', '2026-01-29 01:05:48', '2026-01-29 01:05:48');

-- --------------------------------------------------------

--
-- Table structure for table `races`
--

CREATE TABLE `races` (
  `id` int(11) NOT NULL,
  `grand_prix_name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `race_date` date NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `alert_message` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `profile_pic` varchar(255) DEFAULT NULL,
  `strikes` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`, `role`, `created_at`, `profile_pic`, `strikes`) VALUES
(1, 'Chel@gmail.com', 'Chels', '$2y$10$lrRO0BWts2Oifip22Tee3.hyyHlKwT7DubtXTBvmS0luN7IE.OL3i', 'user', '2026-01-17 01:51:42', 'pfp_1768828124_696e2cdce362f.jpeg', 0),
(2, 'Ciaa@gmail.com', 'Ciaa', '$2y$10$eRcdss/3yhrx5IAXlK5W1upN7Q9xXYmKDZm7aiGf8GoGQ2eYQ4fCu', 'user', '2026-01-17 03:35:18', 'pfp_1768871441_696ed611be5e0.jpeg', 0),
(3, 'YohjiFault@gmail.com', 'Yogi', '$2y$10$wRajloZ9pHcKSsQ5CBiIQucy.DubOqT6aRDiHmewFiNyQZ/5C9GIq', 'user', '2026-01-19 02:01:46', 'pfp_1768982871_69708957c0673.jpg', 1),
(5, 'Admin@gmail.com', 'Ad', '$2y$10$p8IOAZ28Ab3mQP2wQYA9RuRBYJmWnO2ZPTsIsT7PGM5Goy1aYJzge', 'admin', '2026-01-19 02:20:45', NULL, 0),
(6, 'Kyzh@gmail.com', 'Kyzh', '$2y$10$Gg0AdB8rgX2Fluuv8fEAUeE4GzVxMXi/W..VzGqrbqlzT6hcAXMg6', 'user', '2026-01-21 05:27:54', NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_email` (`user_email`);

--
-- Indexes for table `races`
--
ALTER TABLE `races`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `races`
--
ALTER TABLE `races`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`user_email`) REFERENCES `users` (`email`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

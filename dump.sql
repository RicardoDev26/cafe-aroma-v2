--
-- PostgreSQL database dump
--

\restrict slNGgAI159EGemlef7ZRTOsSp6P9yWdA5EQIX5GF2Zbixngf2zJpPWGPs4wLQox

-- Dumped from database version 15.14 (Debian 15.14-1.pgdg13+1)
-- Dumped by pg_dump version 15.14 (Debian 15.14-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: doctrine_migration_versions; Type: TABLE; Schema: public; Owner: cafeuser
--

CREATE TABLE public.doctrine_migration_versions (
    version character varying(191) NOT NULL,
    executed_at timestamp(0) without time zone DEFAULT NULL::timestamp without time zone,
    execution_time integer
);


ALTER TABLE public.doctrine_migration_versions OWNER TO cafeuser;

--
-- Name: product; Type: TABLE; Schema: public; Owner: cafeuser
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    price double precision NOT NULL,
    image_url text NOT NULL,
    category character varying(255) NOT NULL
);


ALTER TABLE public.product OWNER TO cafeuser;

--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: cafeuser
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO cafeuser;

--
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cafeuser
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: promotion; Type: TABLE; Schema: public; Owner: cafeuser
--

CREATE TABLE public.promotion (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    image_url text NOT NULL,
    valid_until json NOT NULL,
    discount character varying(50) NOT NULL
);


ALTER TABLE public.promotion OWNER TO cafeuser;

--
-- Name: promotion_id_seq; Type: SEQUENCE; Schema: public; Owner: cafeuser
--

CREATE SEQUENCE public.promotion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.promotion_id_seq OWNER TO cafeuser;

--
-- Name: promotion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cafeuser
--

ALTER SEQUENCE public.promotion_id_seq OWNED BY public.promotion.id;


--
-- Name: testimonial; Type: TABLE; Schema: public; Owner: cafeuser
--

CREATE TABLE public.testimonial (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "position" character varying(255) NOT NULL,
    photo text NOT NULL,
    comment text NOT NULL
);


ALTER TABLE public.testimonial OWNER TO cafeuser;

--
-- Name: testimonial_id_seq; Type: SEQUENCE; Schema: public; Owner: cafeuser
--

CREATE SEQUENCE public.testimonial_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.testimonial_id_seq OWNER TO cafeuser;

--
-- Name: testimonial_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cafeuser
--

ALTER SEQUENCE public.testimonial_id_seq OWNED BY public.testimonial.id;


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: cafeuser
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Name: promotion id; Type: DEFAULT; Schema: public; Owner: cafeuser
--

ALTER TABLE ONLY public.promotion ALTER COLUMN id SET DEFAULT nextval('public.promotion_id_seq'::regclass);


--
-- Name: testimonial id; Type: DEFAULT; Schema: public; Owner: cafeuser
--

ALTER TABLE ONLY public.testimonial ALTER COLUMN id SET DEFAULT nextval('public.testimonial_id_seq'::regclass);


--
-- Data for Name: doctrine_migration_versions; Type: TABLE DATA; Schema: public; Owner: cafeuser
--

COPY public.doctrine_migration_versions (version, executed_at, execution_time) FROM stdin;
DoctrineMigrations\\Version20250823221344	2025-08-25 00:29:17	10
DoctrineMigrations\\Version20250823234859	2025-08-25 00:29:17	0
DoctrineMigrations\\Version20250824044525	2025-08-25 00:29:17	5
DoctrineMigrations\\Version20250824045321	2025-08-25 00:29:17	0
DoctrineMigrations\\Version20250824045449	2025-08-25 00:29:17	0
DoctrineMigrations\\Version20250824045731	2025-08-25 00:29:17	0
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: cafeuser
--

COPY public.product (id, name, description, price, image_url, category) FROM stdin;
2	Café Latte	Espresso suave con leche vaporizada y una delicada capa de espuma.	4.5	https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=400&fit=crop	coffee
3	Cappuccino	Espresso perfecto cubierto con espuma de leche cremosa y esponjosa.	4.25	https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop	coffee
4	Té Chai	Mezcla aromática de especias con leche cremosa, una experiencia reconfortante.	3.75	https://sakiproducts.com/cdn/shop/articles/20221219135858-chai-tea-recipe-blog_1920x1080.webp?v=1671458347	tes
5	Croissant	Croissant francés recién horneado, dorado y crujiente por fuera, suave por dentro.	2.5	https://i.pinimg.com/736x/25/ff/96/25ff96390ab7c56a85277c644db0e15a.jpg	bakery
6	Americano	Espresso puro diluido con agua caliente para un sabor intenso y limpio.	3.25	https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop	coffee
7	Muffin de Arándanos	Muffin esponjoso cargado de arándanos frescos y un toque de vainilla.	3	https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop	bakery
8	Espresso	Shot puro de café espresso, intenso y aromático, base de todas nuestras bebidas.	2.75	https://www.seriouseats.com/thmb/MS_5p-UVwIHCrr5MaXonYJajP7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__06__20180613-coffee-vs-espresso-vicky-wasik-3-1500x1125-418fa2a14e7249b18040c2c34bf8569c.jpg	coffee
9	Té Verde Matcha	Polvo de matcha premium batido tradicionalmente, rico en antioxidantes.	4	https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop	tes
10	Bagel con Salmón	Bagel artesanal tostado con salmón ahumado, queso crema y eneldo fresco.	6.5	https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop	bakery
11	Mocha	Espresso con chocolate caliente y leche vaporizada, coronado con crema batida.	4.75	https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/the_perfect_mocha_coffee_29100_16x9.jpg	coffee
12	Té Earl Grey	Té negro clásico con esencia de bergamota, elegante y refinado.	3.5	https://media.istockphoto.com/id/2153418621/photo/earl-grey-hot-tea.jpg?s=612x612&w=0&k=20&c=PnJGcIZXZ3MQn9lgNCR7Zx6l89Y204sesuP96Snrc3U=	tes
13	Cheesecake	Delicioso cheesecake cremoso con base de galleta, cubierto con frutos rojos.	4.25	https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=400&fit=crop	desserts
\.


--
-- Data for Name: promotion; Type: TABLE DATA; Schema: public; Owner: cafeuser
--

COPY public.promotion (id, title, description, image_url, valid_until, discount) FROM stdin;
1	2x1 en Cappuccinos	Todos los martes y jueves, disfruta de dos cappuccinos por el precio de uno. ¡Perfecto para compartir con un amigo o simplemente para disfrutar de una segunda taza!	https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop	["V\\u00e1lido martes y jueves"]	50% OFF
2	Combo Café + Croissant	Combo especial: cualquier café de nuestra selección premium más un croissant francés recién horneado por solo $5. Una combinación perfecta para comenzar tu día.	https://www.bandrabuzz.com/wp-content/uploads/2020/06/French-Butter-Croissant.jpg	["Todo el d\\u00eda"]	$5.00
3	Happy Hour 15% OFF	De 3:00 PM a 5:00 PM, todos nuestros productos con 15% de descuento. El momento perfecto para una pausa en tu tarde y disfrutar de nuestras delicias.	https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop	["3:00 PM - 5:00 PM"]	15% OFF
4	Desayuno Completo	Inicia tu día con energía: café americano grande, jugo natural, tostadas artesanales y mermelada casera. Todo por un precio especial que te encantará.	https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop	["Hasta las 11:00 AM"]	$8.50
5	Té de la Tarde	Promoción especial de 4:00 PM a 6:00 PM: cualquier té premium acompañado de dos mini pasteles de nuestra selección por un precio único.	https://media.istockphoto.com/id/472362050/es/foto/el-t%C3%A9-de-la-media-tarde-en-londres.jpg?s=612x612&w=0&k=20&c=ZKT0b7FHEUmHabmWh2NMKiN1ZsPv-68qAauyOydLAUs=	["4:00 PM - 6:00 PM"]	$6.75
6	Fin de Semana Dulce	Los fines de semana, todos nuestros postres y cheesecakes con 20% de descuento. Perfecto para endulzar tu fin de semana con sabores únicos.	https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop	["S\\u00e1bados y domingos"]	20% OFF
\.


--
-- Data for Name: testimonial; Type: TABLE DATA; Schema: public; Owner: cafeuser
--

COPY public.testimonial (id, name, "position", photo, comment) FROM stdin;
1	Elena	Bloguera de café	https://randomuser.me/api/portraits/women/12.jpg	Recomiendo Café Aroma a todos mis seguidores, la calidad y el ambiente son insuperables.
2	Ana García	Bloguera de café	https://randomuser.me/api/portraits/women/68.jpg	El mejor café que he probado en la ciudad. El ambiente es súper acogedor y el servicio excelente.
3	Carlos	Amante del café	https://randomuser.me/api/portraits/men/52.jpg	Me encanta venir aquí para trabajar y disfrutar de un buen espresso. ¡Recomendado 100%!
4	Sofía	Estudiante universitaria	https://randomuser.me/api/portraits/women/45.jpg	La atención personalizada y la calidad del café hacen que siempre vuelva. ¡Gracias Café Aroma!
5	Luis	Freelancer	https://randomuser.me/api/portraits/men/33.jpg	Un lugar perfecto para concentrarme y tomar un café delicioso al mismo tiempo.
6	María	Amante de los postres	https://randomuser.me/api/portraits/women/22.jpg	Los postres combinan perfecto con el café. Siempre es una experiencia deliciosa.
7	Jorge Ramírez	Turista	https://randomuser.me/api/portraits/men/78.jpg	Visité Café Aroma por recomendación y superó mis expectativas en sabor y atención.
\.


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cafeuser
--

SELECT pg_catalog.setval('public.product_id_seq', 13, true);


--
-- Name: promotion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cafeuser
--

SELECT pg_catalog.setval('public.promotion_id_seq', 6, true);


--
-- Name: testimonial_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cafeuser
--

SELECT pg_catalog.setval('public.testimonial_id_seq', 7, true);


--
-- Name: doctrine_migration_versions doctrine_migration_versions_pkey; Type: CONSTRAINT; Schema: public; Owner: cafeuser
--

ALTER TABLE ONLY public.doctrine_migration_versions
    ADD CONSTRAINT doctrine_migration_versions_pkey PRIMARY KEY (version);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: cafeuser
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: promotion promotion_pkey; Type: CONSTRAINT; Schema: public; Owner: cafeuser
--

ALTER TABLE ONLY public.promotion
    ADD CONSTRAINT promotion_pkey PRIMARY KEY (id);


--
-- Name: testimonial testimonial_pkey; Type: CONSTRAINT; Schema: public; Owner: cafeuser
--

ALTER TABLE ONLY public.testimonial
    ADD CONSTRAINT testimonial_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict slNGgAI159EGemlef7ZRTOsSp6P9yWdA5EQIX5GF2Zbixngf2zJpPWGPs4wLQox


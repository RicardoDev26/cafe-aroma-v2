import { Promotion } from "./promotion.model";

export const promotions: Promotion[] = [
    {
        id: 1,
        title: "2x1 en Cappuccinos",
        description: "Todos los martes y jueves, disfruta de dos cappuccinos por el precio de uno. ¡Perfecto para compartir con un amigo o simplemente para disfrutar de una segunda taza!",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
        validUntil: "Válido martes y jueves",
        discount: "50% OFF"
      },
      {
        id: 2,
        title: "Combo Café + Croissant",
        description: "Combo especial: cualquier café de nuestra selección premium más un croissant francés recién horneado por solo $5. Una combinación perfecta para comenzar tu día.",
        imageUrl: "https://www.bandrabuzz.com/wp-content/uploads/2020/06/French-Butter-Croissant.jpg",
        validUntil: "Todo el día",
        discount: "$5.00"
      },
      {
        id: 3,
        title: "Happy Hour 15% OFF",
        description: "De 3:00 PM a 5:00 PM, todos nuestros productos con 15% de descuento. El momento perfecto para una pausa en tu tarde y disfrutar de nuestras delicias.",
        imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop",
        validUntil: "3:00 PM - 5:00 PM",
        discount: "15% OFF"
      },
      {
        id: 4,
        title: "Desayuno Completo",
        description: "Inicia tu día con energía: café americano grande, jugo natural, tostadas artesanales y mermelada casera. Todo por un precio especial que te encantará.",
        imageUrl: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop",
        validUntil: "Hasta las 11:00 AM",
        discount: "$8.50"
      },
      {
        id: 5,
        title: "Té de la Tarde",
        description: "Promoción especial de 4:00 PM a 6:00 PM: cualquier té premium acompañado de dos mini pasteles de nuestra selección por un precio único.",
        imageUrl: "https://media.istockphoto.com/id/472362050/es/foto/el-t%C3%A9-de-la-media-tarde-en-londres.jpg?s=612x612&w=0&k=20&c=ZKT0b7FHEUmHabmWh2NMKiN1ZsPv-68qAauyOydLAUs=",
        validUntil: "4:00 PM - 6:00 PM",
        discount: "$6.75"
      },
      {
        id: 6,
        title: "Fin de Semana Dulce",
        description: "Los fines de semana, todos nuestros postres y cheesecakes con 20% de descuento. Perfecto para endulzar tu fin de semana con sabores únicos.",
        imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
        validUntil: "Sábados y domingos",
        discount: "20% OFF"
      }
];

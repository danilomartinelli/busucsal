export const days = [
  {
    value: 0,
    name: 'Domingo',
  },
  {
    value: 1,
    name: 'Segunda',
  },
  {
    value: 2,
    name: 'Terça',
  },
  {
    value: 3,
    name: 'Quarta',
  },
  {
    value: 4,
    name: 'Quinta',
  },
  {
    value: 5,
    name: 'Sexta',
  },
  {
    value: 6,
    name: 'Sábado',
  },
];

export type ItineraryInfo = {
  roadmap: string;
  time: string;
};

export type Itinerary = {
  weekday: number[];
  info: ItineraryInfo[];
};

export const itinerary: Itinerary[] = [
  {
    weekday: [0],
    info: [],
  },
  {
    weekday: [1, 2, 3, 4, 5],
    info: [
      {
        roadmap: 'Roteiro 1',
        time: '06h30',
      },
      {
        roadmap: 'Roteiro 1',
        time: '06h45',
      },
      {
        roadmap: 'Roteiro 1',
        time: '07h',
      },
      {
        roadmap: 'Roteiro 1',
        time: '07h20',
      },
      {
        roadmap: 'Roteiro 1',
        time: '07h40',
      },
      {
        roadmap: 'Roteiro 2',
        time: '09h30',
      },
      {
        roadmap: 'Roteiro 2',
        time: '10h',
      },
      {
        roadmap: 'Roteiro 5',
        time: '10h30',
      },
      {
        roadmap: 'Roteiro 2',
        time: '11h15',
      },
      {
        roadmap: 'Roteiro 2',
        time: '11h45',
      },
      {
        roadmap: 'Roteiro 2',
        time: '12h15',
      },
      {
        roadmap: 'Roteiro 5',
        time: '12h45',
      },
      {
        roadmap: 'Roteiro 4',
        time: '13h30',
      },
      {
        roadmap: 'Roteiro 1',
        time: '17h10',
      },
      {
        roadmap: 'Roteiro 1',
        time: '18h20',
      },
      {
        roadmap: 'Roteiro 1',
        time: '18h40',
      },
      {
        roadmap: 'Roteiro 3',
        time: '20h30',
      },
      {
        roadmap: 'Roteiro 3',
        time: '20h55',
      },
      {
        roadmap: 'Roteiro 3',
        time: '21h20',
      },
      {
        roadmap: 'Roteiro 5',
        time: '21h40',
      },
      {
        roadmap: 'Roteiro 4',
        time: '22h15',
      },
    ],
  },
  {
    weekday: [6],
    info: [
      {
        roadmap: 'Roteiro 1',
        time: '06h50',
      },
      {
        roadmap: 'Roteiro 2',
        time: '08h25',
      },
      {
        roadmap: 'Roteiro 4',
        time: '09h50',
      },
      {
        roadmap: 'Roteiro 2',
        time: '11h30',
      },
      {
        roadmap: 'Roteiro 4',
        time: '12h30',
      },
    ],
  },
];

export type Roadmap = {name: string; locations: string[]};

export const roadmaps: Roadmap[] = [
  {
    name: 'Roteiro 1',
    locations: [
      'Av. Paralela (sentido aeroporto) -> Ponto do estádio de Pituaçu.',
    ],
  },
  {
    name: 'Roteiro 2',
    locations: [
      'Av. Pinto de Aguiar (sentido Paralela) -> Atrás do primeiro ponto de ônibus;',
      'Av. Pinto de Aguiar (sentido Paralela) -> Ponto do Condomínio Greenville;',
      'Terminal Pituaçu -> 1º andar, Plataforma E, 17.',
    ],
  },
  {
    name: 'Roteiro 3',
    locations: [
      'Av. Pinto de Aguiar (sentido Paralela) -> Ponto do condomínio Greenville;',
      'Av. Pinto de Aguiar (sentido Paralela) -> Atrás do primeiro ponto de ônibus;',
      'Av. Pinto de Aguiar (sentido aeroporto) -> Ponto do estádio de Pituaçu.',
    ],
  },
  {
    name: 'Roteiro 4',
    locations: [
      'Av. Pinto de Aguiar (sentido Paralela) -> Ponto do condomínio Greenville;',
      'Av. Paralela (sentido centro) -> Ponto do estádio de Pituaçu;',
      'Av. Paralela (sentido centro) -> Ponto do Extra da Paralela;',
      'Av. Paralela (sentido aeroporto) -> Ponto do Extra da Paralela;',
      'Av. Luís Viana Filho (sentido aeroporto) -> Ponto do estádio de Pituaçu.',
    ],
  },
  {
    name: 'Roteiro 5',
    locations: [
      'Av. Pinto de Aguiar (sentido orla) -> Ponto do condomínio Greenville;',
      'Av. Pinto de Aguiar (sentido Paralela) -> Atrás do primeiro ponto de ônibus;',
      'Av. Paralela (sentido aeroporto) -> Ponto do Wall Street Empresarial;',
      'Av. Paralela (sentido aeroporto) -> Ponto do posto Menor Preço;',
      'Av. Paralela (sentido centro) -> Ponto em frente ao colégio Villa;',
      'Av. Paralela (sentido centro) -> Ponto próximo a entrada do Flamboyant;',
      'Av. Paralela (sentido centro) -> Ponto em frente ao condomínio Brisas;',
      'Av. Paralela (sentido centro) -> Ponto da estação de metrô Pituaçu;',
      'Av. Paralela (sentido centro) -> Ponto do Extra Paralela;',
      'Av. Paralela (sentido aeroporto) -> Ponto do Extra Paralela;',
      'Av. Paralela (sentido aeroporto) -> Ponto do estádio de Pituaçu.',
    ],
  },
];

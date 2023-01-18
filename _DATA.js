export const projects = {
  goatcircuits: {
    id: "goatciruicts",
    client: "Goat Circuits",
    type: "Website",
    image: "goat-circuits.jpg",
    description: "Online web presence for small business.",
    tech: ["ReactJS ", "EmailJS "],
  },
  stainedwheat: {
    id: "stainedwheat",
    client: "Stained Wheat",
    type: "Brand and Packaging Design",
    image: "stained-wheat-round.jpg",
    description: "Branding and packaging design for chocolatier.",
    tech: ["HTML ", "CSS ", "JS "],
  },
  pourover: {
    id: "pourover",
    client: "Pourover",
    type: "Graphics",
    image: "pourover.jpeg",
    description: "Personal practice in design.",
    tech: ["Pencil ", "Paper ", "Affinity Designer "],
  },
  personal: {
    id: "personal",
    client: "Personal",
    type: "Personal Collection",
    image: "personal-logo.jpg",
    description: "Visual assets created for personal brand.",
    tech: ["Pencil ", "Paper ", "Affinity Designer "],
  },
};

export function _getProjects() {
  return new Promise((resolve) => {
    resolve({ ...projects });
  });
}

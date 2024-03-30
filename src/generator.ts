export const generateRandomName = (): string => {
    const adjectives = [
        'Ancient', 'Mystic', 'Eternal', 'Silent', 'Radiant', 'Shadowy', 'Dazzling', 'Frozen',
        'Bright', 'Dark', 'Golden', 'Silver', 'Crimson', 'Azure', 'Emerald', 'Scarlet',
        'Vibrant', 'Faint', 'Gleaming', 'Whispering', 'Shimmering', 'Majestic', 'Luminous',
        'Gloomy', 'Mysterious', 'Enchanted', 'Forgotten', 'Legendary', 'Mythical', 'Ancient',
        'Arcane', 'Cosmic', 'Primal', 'Ethereal', 'Celestial', 'Infernal', 'Spectral', 'Divine',
        'Abyssal', 'Solar', 'Lunar', 'Stellar', 'Nebular', 'Galactic', 'Dimensional', 'Eldritch',
        'Primeval', 'Ancient', 'Antique', 'Archaic', 'Classical', 'Timeless', 'Ageless', 'Eternal',
        'Immortal', 'Perpetual', 'Unending', 'Everlasting', 'Infinite', 'Boundless', 'Limitless',
        'Endless', 'Unlimited', 'Ultimate', 'Supreme', 'Absolute', 'Total', 'Complete', 'Perfect',
        'Unmatched', 'Unrivaled', 'Unequaled', 'Incomparable', 'Ideal', 'Optimal', 'Peak', 'Pinnacle',
        'Summit', 'Zenith', 'Acme', 'Apex', 'Culmination', 'Meridian', 'Height', 'Elevation', 'Apogee',
        'Crest', 'Crown', 'Top', 'Capstone', 'Keystone', 'Cornerstone', 'Foundation', 'Base', 'Root',
        'Heart', 'Core', 'Essence', 'Spirit', 'Soul', 'Vitality', 'Life', 'Energy', 'Force', 'Power',
        'Might', 'Strength', 'Potency', 'Vigor', 'Bravery', 'Courage', 'Valor', 'Heroism', 'Boldness',
        'Daring', 'Adventure', 'Wonder', 'Amazement', 'Awe', 'Inspiration', 'Enchantment', 'Magic',
        'Sorcery', 'Wizardry', 'Witchcraft', 'Alchemy', 'Ritual', 'Mystery', 'Secret', 'Arcana', 'Lore',
        'Knowledge', 'Wisdom', 'Insight', 'Enlightenment', 'Illumination', 'Revelation', 'Discovery',
        'Invention', 'Innovation', 'Creation', 'Design', 'Craftsmanship', 'Artistry', 'Imagination',
        'Fantasy', 'Dream', 'Vision', 'Illusion', 'Mirage', 'Phantom', 'Specter', 'Ghost', 'Shadow',
        'Reflection', 'Echo', 'Silhouette', 'Image', 'Picture', 'Portrait', 'Landscape', 'Scene',
        'Panorama'];

    const nouns = [
        'Phoenix', 'Mountain', 'River', 'Flame', 'Star', 'Forest', 'Ocean', 'Wind',
        'Eagle', 'Dragon', 'Shadow', 'Light', 'Moon', 'Sun', 'Meadow', 'Cliff',
        'Thunder', 'Lightning', 'Rain', 'Snow', 'Ice', 'Fire', 'Earth', 'Wind',
        'Galaxy', 'Nebula', 'Void', 'Abyss', 'Horizon', 'Peak', 'Valley', 'Lake',
        'Sea', 'Waterfall', 'Creek', 'Brook', 'Stream', 'Rock', 'Stone', 'Boulder',
        'Crystal', 'Gem', 'Jewel', 'Mist', 'Fog', 'Smoke', 'Ash', 'Dust', 'Sand',
        'Desert', 'Jungle', 'Island', 'Peninsula', 'Bay', 'Beach', 'Oceanfloor',
        'Reef', 'Forest', 'Grove', 'Orchard', 'Vineyard', 'Field', 'Prairie', 'Farm',
        'Garden', 'Park', 'Wilderness', 'Trail', 'Path', 'Road', 'Highway', 'Bridge',
        'Tunnel', 'Riverbank', 'Seashore', 'Waterside', 'Hillside', 'MountainRange',
        'Volcano', 'Plateau', 'Mesa', 'Canyon', 'Gorge', 'Valley', 'Glacier', 'Fjord',
        'Iceberg', 'Archipelago', 'Atoll', 'Coral', 'Mangrove', 'Rainforest', 'Savanna',
        'Steppe', 'Tundra', 'Marsh', 'Swamp', 'Bog', 'Quagmire', 'Wetland', 'Forest',
        'Jungle', 'Woodland', 'Bush', 'Thicket', 'Underbrush'
      ];

    const verbs = [
        'Running', 'Whispering', 'Shining', 'Sleeping', 'Roaring', 'Glowing', 'Dancing', 'Singing',
        'Jumping', 'Flying', 'Diving', 'Swimming', 'Chasing', 'Fighting', 'Playing', 'Laughing',
        'Crying', 'Screaming', 'Listening', 'Walking', 'Building', 'Cooking', 'Painting', 'Writing',
        'Reading', 'Drawing', 'Knitting', 'Sewing', 'Hunting', 'Fishing', 'Gaming', 'Working',
        'Studying', 'Teaching', 'Selling', 'Buying', 'Driving', 'Riding', 'Speaking', 'Arguing',
        'Explaining', 'Wondering', 'Pondering', 'Exploring', 'Traveling', 'Inventing', 'Discovering',
        'Learning', 'Thinking', 'Analyzing', 'Dreaming', 'Planning', 'Celebrating', 'Decorating',
        'Cleaning', 'Repairing', 'Climbing', 'Falling', 'Helping', 'Saving', 'Healing', 'Loving',
        'Hating', 'Hoping', 'Feeling', 'Touching', 'Smelling', 'Tasting', 'Seeing', 'Hearing',
        'Observing', 'Recording', 'Editing', 'Directing', 'Producing', 'Designing', 'Modeling',
        'Animating', 'Crafting', 'Baking', 'Frying', 'Grilling', 'Mixing', 'Shaking', 'Stirring',
        'Measuring', 'Pouring', 'Filling', 'Spilling', 'Cutting', 'Chopping', 'Slicing', 'Dicing',
        'Peeling', 'Wrapping', 'Unwrapping', 'Sending', 'Receiving', 'Uploading', 'Downloading'
      ];
      
    // Function to select a random element from an array
    const selectRandom = (array: string[]): string => {
      return array[Math.floor(Math.random() * array.length)];
    };
  
    // Combine words with a random number to generate a name
    const adjective = selectRandom(adjectives);
    const noun = selectRandom(nouns);
    const verb = selectRandom(verbs);
    const number = Math.floor(Math.random() * (999 - 10 + 1)) + 10; // Generates a number between 10 and 999
    const randomSuffix = generateRandomSuffix(); // Generates a random 6-character alphanumeric string

    // Combine, convert to lowercase, and replace spaces with hyphens
    const name = `${adjective}-${noun}-${verb}-${number}-${randomSuffix}`.toLowerCase();

    return name
}

const generateRandomSuffix = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
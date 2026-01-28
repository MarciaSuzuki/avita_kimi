// Ontology Configuration and Rules
const ONTOLOGY_RULES = {
    // Genre definitions and their required layers
    genres: {
        narrative: {
            name: "Narrative / Story",
            icon: "fas fa-book",
            color: "#3498db",
            layers: ["events", "participants", "discourse", "emotion", "pragmatic"],
            defaults: {
                register: "narrative",
                discourse_function: "MAIN"
            }
        },
        poetry_song: {
            name: "Poetry / Song",
            icon: "fas fa-music",
            color: "#9b59b6",
            layers: ["poetic_structure", "figurative_language", "emotion", "sound_patterns", "pragmatic"],
            defaults: {
                register: "poetic"
            }
        },
        teaching_sermon: {
            name: "Teaching / Sermon",
            icon: "fas fa-chalkboard-teacher",
            color: "#2ecc71",
            layers: ["speech_acts", "key_terms", "discourse_relations", "pragmatic", "participants"],
            defaults: {
                register: "formal",
                speech_act: "instruction"
            }
        },
        dialogue_conversation: {
            name: "Dialogue / Conversation",
            icon: "fas fa-comments",
            color: "#f39c12",
            layers: ["speech_acts", "participants", "social_axis", "pragmatic", "emotion"],
            defaults: {
                register: "dialogue"
            }
        },
        procedural: {
            name: "Procedural / Instructions",
            icon: "fas fa-list-ol",
            color: "#1abc9c",
            layers: ["events", "sequence_relations", "aspect", "participants"],
            defaults: {
                event_category: "ACTION",
                aspect: "completed"
            }
        },
        descriptive: {
            name: "Descriptive",
            icon: "fas fa-eye",
            color: "#34495e",
            layers: ["participants", "properties", "spatial_relations", "part_whole"],
            defaults: {
                event_category: "STATE"
            }
        },
        testimony: {
            name: "Testimony / Personal Experience",
            icon: "fas fa-user-check",
            color: "#e74c3c",
            layers: ["emotion", "evidentiality", "source_tracking", "events"],
            defaults: {
                evidentiality: "witnessed_visual",
                register: "narrative"
            }
        },
        proverb_wisdom: {
            name: "Proverb / Wisdom Saying",
            icon: "fas fa-lightbulb",
            color: "#f1c40f",
            layers: ["proverb_features", "wisdom_function", "authority_source", "applicability"],
            defaults: {
                register: "wisdom"
            }
        },
        prayer_lament: {
            name: "Prayer / Lament",
            icon: "fas fa-pray",
            color: "#7f8c8d",
            layers: ["speech_acts", "register", "emotion", "participants_divine"],
            defaults: {
                register: "lament",
                social_axis: "human_to_divine"
            }
        },
        ceremonial: {
            name: "Ceremonial / Ritual",
            icon: "fas fa-place-of-worship",
            color: "#8e44ad",
            layers: ["register", "formulaic_tags", "speech_acts", "social_axis"],
            defaults: {
                register: "ceremonial"
            }
        }
    },

    // Event categories and their properties
    event_categories: {
        STATE: {
            name: "State / Condition",
            cores: ["be", "exist", "have", "lack", "contain", "remain"],
            roles: ["experiencer", "location", "manner"],
            modifiers: ["reality", "time_frame", "aspect"]
        },
        MOTION: {
            name: "Motion / Movement",
            cores: ["go", "come", "enter", "exit", "return", "flee", "wander", "travel"],
            roles: ["initiator", "source", "goal", "manner", "companion"],
            modifiers: ["reality", "time_frame", "aspect", "evidentiality"]
        },
        ACTION: {
            name: "Action / Activity",
            cores: ["make", "break", "strike", "kill", "heal", "build", "destroy"],
            roles: ["initiator", "affected", "instrument", "location", "manner"],
            modifiers: ["reality", "time_frame", "aspect", "polarity"]
        },
        TRANSFER: {
            name: "Transfer / Exchange",
            cores: ["give", "receive", "take", "buy", "sell", "offer", "sacrifice"],
            roles: ["initiator", "affected", "recipient", "source", "goal"],
            modifiers: ["reality", "time_frame", "aspect"]
        },
        SPEECH: {
            name: "Speech / Communication",
            cores: ["say", "ask", "command", "promise", "bless", "curse", "proclaim"],
            roles: ["initiator", "recipient", "manner"],
            modifiers: ["reality", "time_frame", "speech_act", "register"]
        },
        INTERNAL: {
            name: "Internal / Mental",
            cores: ["think", "know", "believe", "feel", "want", "fear", "love"],
            roles: ["experiencer", "manner"],
            modifiers: ["reality", "time_frame", "emotion", "intensity"]
        },
        PROCESS: {
            name: "Process / Change",
            cores: ["become", "grow", "die", "change", "heal", "ripen", "decay"],
            roles: ["affected", "source", "goal", "manner"],
            modifiers: ["reality", "time_frame", "aspect"]
        },
        RITUAL: {
            name: "Ritual / Ceremony",
            cores: ["sacrifice", "worship", "consecrate", "purify", "anoint"],
            roles: ["initiator", "affected", "recipient", "manner"],
            modifiers: ["reality", "time_frame", "register"]
        },
        META: {
            name: "Meta / Commentary",
            cores: ["narrate", "summarize", "mark", "frame"],
            roles: ["initiator", "manner"],
            modifiers: ["reality", "time_frame", "register"]
        }
    },

    // Participant types and their properties
    participant_types: {
        person: {
            name: "Person / Human",
            properties: ["quantity", "reference", "character", "physical", "social", "emotional", "relational"]
        },
        group: {
            name: "Group / Collective",
            properties: ["quantity", "reference", "social", "relational"]
        },
        divine: {
            name: "Divine Being",
            properties: ["reference", "character", "evaluative", "relational"]
        },
        animal: {
            name: "Animal",
            properties: ["quantity", "reference", "physical", "evaluative"]
        },
        place: {
            name: "Place / Location",
            properties: ["reference", "spatial", "temporal"]
        },
        thing: {
            name: "Thing / Object",
            properties: ["quantity", "reference", "material", "evaluative"]
        },
        stuff: {
            name: "Stuff / Material",
            properties: ["quantity", "reference", "material"]
        },
        abstract: {
            name: "Abstract Concept",
            properties: ["reference", "evaluative"]
        },
        plant: {
            name: "Plant",
            properties: ["quantity", "reference", "physical"]
        },
        event_as_participant: {
            name: "Event as Participant",
            properties: ["reference", "temporal"]
        }
    },

    // Emotion types
    emotions: {
        positive: ["joy", "hope", "gratitude", "love", "compassion", "peace", "trust", "relief", "awe", "pride", "contentment", "desire", "zeal"],
        negative: ["sorrow", "fear", "anger", "disgust", "shame", "guilt", "despair", "anxiety", "loneliness", "jealousy", "resentment", "bitterness"],
        complex: ["awe_fear", "reverence", "remorse", "longing"]
    },

    // Intensity levels
    intensity_levels: [
        { value: "low", name: "Low", color: "#b3e0ff" },
        { value: "medium", name: "Medium", color: "#66b3ff" },
        { value: "high", name: "High", color: "#0066cc" },
        { value: "extreme", name: "Extreme", color: "#004080" }
    ],

    // Discourse functions
    discourse_functions: {
        SET: "Setting",
        BG: "Background",
        MAIN: "Mainline",
        EVAL: "Evaluation",
        QUOTE_MARGIN: "Quote Margin",
        PEAK: "Peak Event"
    },

    // Register types
    registers: [
        "informal", "narrative", "formal", "ceremonial", "elder_speech", "legal",
        "poetic", "prophetic", "wisdom", "dialogue", "lament", "hymnic",
        "didactic_poetry", "love_poetry", "victory_song", "dirge", "taunt",
        "blessing_poetry", "curse_poetry"
    ],

    // Speech acts
    speech_acts: [
        "assertive", "directive", "commissive", "expressive", "declarative",
        "interrogative", "blessing", "curse", "oath", "prophecy", "praise",
        "lament", "thanksgiving", "petition", "instruction"
    ],

    // Retrieve relevant options based on current context
    getRelevantOptions: function(context) {
        let options = {};
        
        switch(context.currentTab) {
            case 'events':
                if (context.eventCategory) {
                    const category = this.event_categories[context.eventCategory];
                    options.cores = category.cores;
                    options.roles = category.roles;
                    options.modifiers = category.modifiers;
                    
                    // Special handling for speech acts
                    if (context.eventCategory === 'SPEECH') {
                        options.speech_acts = this.speech_acts;
                    }
                }
                break;
                
            case 'participants':
                if (context.participantType) {
                    const type = this.participant_types[context.participantType];
                    options.properties = type.properties;
                    
                    // Filter property dimensions based on type
                    options.property_dimensions = this.getPropertyDimensionsForType(context.participantType);
                }
                break;
                
            case 'emotion':
                options.emotions = [...this.emotions.positive, ...this.emotions.negative, ...this.emotions.complex];
                options.intensity = this.intensity_levels;
                break;
                
            case 'discourse':
                options.functions = this.discourse_functions;
                break;
                
            case 'pragmatic':
                options.registers = this.registers;
                break;
        }
        
        return options;
    },

    getPropertyDimensionsForType: function(type) {
        const dimensions = {
            character: ["righteous", "wicked", "faithful", "unfaithful", "wise", "foolish"],
            physical: ["old", "young", "strong", "weak", "beautiful", "tall", "short"],
            social: ["rich", "poor", "noble", "slave", "free", "foreign", "native"],
            emotional: ["happy", "sad", "angry", "afraid", "peaceful", "troubled"],
            relational: ["married", "widowed", "orphaned", "firstborn"],
            material: ["wooden", "stone", "golden", "bronze", "clay"],
            evaluative: ["good", "bad", "clean", "unclean", "holy", "profane"],
            temporal: ["ancient", "new", "temporary", "eternal"],
            spatial: ["near", "far", "high", "low", "inner", "outer"]
        };
        
        // Return only relevant dimensions for the type
        const typeConfig = this.participant_types[type];
        if (!typeConfig) return {};
        
        let result = {};
        typeConfig.properties.forEach(prop => {
            if (dimensions[prop]) {
                result[prop] = dimensions[prop];
            }
        });
        
        return result;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ONTOLOGY_RULES;
}

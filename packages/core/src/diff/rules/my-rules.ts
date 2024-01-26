import { CriticalityLevel } from '../changes/change.js';
import { Rule } from './types.js';

// Changes that the library considers non-breaking, but we want to treat as breaking
const CUSTOM_BREAKING_CHANGES = ['INPUT_FIELD_TYPE_CHANGED'];

export const myRules: Rule = ({ changes }) => {
    return changes.map(change => {
        if (CUSTOM_BREAKING_CHANGES.includes(change.type)) {
            return {
                ...change,
                criticality: {
                    ...change.criticality,
                    level: CriticalityLevel.Breaking,
                },
            };
        }

        return change;
    });
};

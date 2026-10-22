export interface HttpHeader {
    name: string;
    value: string;
}

/**
 * Merges user-supplied headers over the defaults. Header names are compared
 * case-insensitively, so a user `content-type` replaces the default `Content-Type`
 * instead of producing a duplicate. Entries with a blank name are ignored.
 */
export function mergeHeaders(defaults: Record<string, string>, overrides: HttpHeader[]): Record<string, string> {
    const merged: Record<string, string> = {...defaults};
    for (const {name, value} of overrides) {
        const trimmed = name.trim();
        if (trimmed === '') {
            continue;
        }
        for (const existing of Object.keys(merged)) {
            if (existing.toLowerCase() === trimmed.toLowerCase()) {
                delete merged[existing];
            }
        }
        merged[trimmed] = value;
    }
    return merged;
}

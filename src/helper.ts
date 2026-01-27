const formatFR = new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "full",
    });

export function formatDate(date: Date): string {
    return formatFR.format(date);
}

export function calculateAge(birthDate: Date, endDate: Date = new Date()): number {
    let age = endDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = endDate.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && endDate.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

export function joinWithAnd(items: string[]): string {
    if (items.length === 0) return "";
    if (items.length === 1) return items[0];
    return items.slice(0, -1).join(", ") + " et " + items[items.length - 1];
}

const regionNames = new Intl.DisplayNames(['fr'], { type: "region"});

export function getRegionName(region : string): string {
    return regionNames.of(region) ?? region
}
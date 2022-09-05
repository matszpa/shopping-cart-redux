const KEY = "cart";

export function loadStore() {
    try {
        const serializedState = localStorage.getItem(KEY);
        if (!serializedState) return [];
        return JSON.parse(serializedState);
    } catch (e) {
        return [];
    }
}

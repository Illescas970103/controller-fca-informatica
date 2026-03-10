const API_BASE = 'http://localhost:8080/api/items';

export const fetchItems = async (): Promise<string[]> => {
    const response = await fetch(API_BASE);
    if (!response.ok) {
        throw new Error(`Error fetching items: ${response.statusText}`);
    }
    return response.json();
};

export const createItem = async (item: string): Promise<string> => {
    const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: item,
    });
    if (!response.ok) {
        throw new Error(`Error creating item: ${response.statusText}`);
    }
    return response.text();
};

export const updateItem = async (id: number, item: string): Promise<string> => {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: item,
    });
    if (!response.ok) {
        throw new Error(`Error updating item: ${response.statusText}`);
    }
    return response.text();
};

export const deleteItem = async (id: number): Promise<string> => {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Error deleting item: ${response.statusText}`);
    }
    return response.text();
};
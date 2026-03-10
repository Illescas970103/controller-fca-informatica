import React, { useState, useEffect } from 'react';
import { fetchItems, createItem, updateItem, deleteItem } from '../services/api';
import './App.css';

const App: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        try {
            setLoading(true);
            const data = await fetchItems();
            setItems(data);
            setError('');
        } catch (err) {
            setError('Error loading items');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddItem = async () => {
        if (!inputValue.trim()) return;
        try {
            await createItem(inputValue);
            setInputValue('');
            loadItems();
            setError('');
        } catch (err) {
            setError('Error creating item');
            console.error(err);
        }
    };

    const handleDeleteItem = async (index: number) => {
        try {
            await deleteItem(index);
            loadItems();
            setError('');
        } catch (err) {
            setError('Error deleting item');
            console.error(err);
        }
    };

    return (
        <div className="app-container">
            <h1>FCA INFORMATICA</h1>
            {error && <div className="error">{error}</div>}
            
            <div className="input-section">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
                    placeholder="Ingresa un nuevo elemento..."
                    disabled={loading}
                />
                <button onClick={handleAddItem} disabled={loading}>
                    {loading ? 'Adding...' : 'Add Item'}
                </button>
            </div>

            <div className="items-section">
                <h2>Elementos ({items.length})</h2>
                {items.length === 0 ? (
                    <p className="empty-state">No hay nada agregado aun</p>
                ) : (
                    <ul className="items-list">
                        {items.map((item, index) => (
                            <li key={index} className="item-card">
                                <span>{item}</span>
                                <button
                                    onClick={() => handleDeleteItem(index)}
                                    className="delete-btn"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default App;
package com.example.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:5173")
public class ApiController {

    private List<String> items = new ArrayList<>();

    @GetMapping
    public ResponseEntity<List<String>> getItems() {
        return ResponseEntity.ok(items);
    }

    @PostMapping
    public ResponseEntity<String> createItem(@RequestBody String item) {
        items.add(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(item);
    }

    @PutMapping("/{index}")
    public ResponseEntity<String> updateItem(@PathVariable int index, @RequestBody String item) {
        if (index >= 0 && index < items.size()) {
            items.set(index, item);
            return ResponseEntity.ok(item);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/{index}")
    public ResponseEntity<String> deleteItem(@PathVariable int index) {
        if (index >= 0 && index < items.size()) {
            String removed = items.remove(index);
            return ResponseEntity.ok(removed);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
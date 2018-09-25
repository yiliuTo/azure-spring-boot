/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for
 * license information.
 */
package sample.aad.model;

import java.util.Objects;
import com.microsoft.azure.spring.data.cosmosdb.core.mapping.Document;

@Document
public class TodoItem {
    private String id;
    private String description;
    private String owner;

    public TodoItem() {
    }

    public TodoItem(String id, String description, String owner) {
        this.description = description;
        this.id = id;
        this.owner = owner;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (o == null || !(o instanceof TodoItem)) {
            return false;
        }
        final TodoItem todoItem = (TodoItem) o;
        return this.getDescription().equals(todoItem.getDescription())
                && this.getOwner().equals(todoItem.getOwner())
                && this.getId() == todoItem.getId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(description, id, owner);
    }
}


package com.pascal.backskeleton.models;
import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "places")
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @ManyToOne
    @JoinColumn(name = "type_id", nullable = false)
    private PlaceType type;

    @Column(name = "address")
    private String address;

    @Column(name = "opening_hours")
    private String openingHours;

    @Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp createdAt;

    // Getters and setters

    public Place() {
    }

    public Place(Long id, String title, PlaceType type, String address, String openingHours, Timestamp createdAt) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.address = address;
        this.openingHours = openingHours;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public PlaceType getType() {
        return this.type;
    }

    public void setType(PlaceType type) {
        this.type = type;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getOpeningHours() {
        return this.openingHours;
    }

    public void setOpeningHours(String openingHours) {
        this.openingHours = openingHours;
    }

    public Timestamp getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Place id(Long id) {
        setId(id);
        return this;
    }

    public Place title(String title) {
        setTitle(title);
        return this;
    }

    public Place type(PlaceType type) {
        setType(type);
        return this;
    }

    public Place address(String address) {
        setAddress(address);
        return this;
    }

    public Place openingHours(String openingHours) {
        setOpeningHours(openingHours);
        return this;
    }

    public Place createdAt(Timestamp createdAt) {
        setCreatedAt(createdAt);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", title='" + getTitle() + "'" +
            ", type='" + getType() + "'" +
            ", address='" + getAddress() + "'" +
            ", openingHours='" + getOpeningHours() + "'" +
            ", createdAt='" + getCreatedAt() + "'" +
            "}";
    }

}

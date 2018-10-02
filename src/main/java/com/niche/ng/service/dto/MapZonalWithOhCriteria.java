package com.niche.ng.service.dto;

import java.io.Serializable;
import io.github.jhipster.service.filter.BooleanFilter;
import io.github.jhipster.service.filter.DoubleFilter;
import io.github.jhipster.service.filter.Filter;
import io.github.jhipster.service.filter.FloatFilter;
import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.LongFilter;
import io.github.jhipster.service.filter.StringFilter;
import io.github.jhipster.service.filter.LocalDateFilter;

/**
 * Criteria class for the MapZonalWithOh entity. This class is used in MapZonalWithOhResource to
 * receive all the possible filtering options from the Http GET request parameters.
 * For example the following could be a valid requests:
 * <code> /map-zonal-with-ohs?id.greaterThan=5&amp;attr1.contains=something&amp;attr2.specified=false</code>
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class MapZonalWithOhCriteria implements Serializable {
    private static final long serialVersionUID = 1L;


    private LongFilter id;

    private LocalDateFilter fromDate;

    private LocalDateFilter toDate;

    private StringFilter description;

    private IntegerFilter status;

    private LongFilter zonalId;

    private LongFilter operationalHeadId;

    public MapZonalWithOhCriteria() {
    }

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public LocalDateFilter getFromDate() {
        return fromDate;
    }

    public void setFromDate(LocalDateFilter fromDate) {
        this.fromDate = fromDate;
    }

    public LocalDateFilter getToDate() {
        return toDate;
    }

    public void setToDate(LocalDateFilter toDate) {
        this.toDate = toDate;
    }

    public StringFilter getDescription() {
        return description;
    }

    public void setDescription(StringFilter description) {
        this.description = description;
    }

    public IntegerFilter getStatus() {
        return status;
    }

    public void setStatus(IntegerFilter status) {
        this.status = status;
    }

    public LongFilter getZonalId() {
        return zonalId;
    }

    public void setZonalId(LongFilter zonalId) {
        this.zonalId = zonalId;
    }

    public LongFilter getOperationalHeadId() {
        return operationalHeadId;
    }

    public void setOperationalHeadId(LongFilter operationalHeadId) {
        this.operationalHeadId = operationalHeadId;
    }

    @Override
    public String toString() {
        return "MapZonalWithOhCriteria{" +
                (id != null ? "id=" + id + ", " : "") +
                (fromDate != null ? "fromDate=" + fromDate + ", " : "") +
                (toDate != null ? "toDate=" + toDate + ", " : "") +
                (description != null ? "description=" + description + ", " : "") +
                (status != null ? "status=" + status + ", " : "") +
                (zonalId != null ? "zonalId=" + zonalId + ", " : "") +
                (operationalHeadId != null ? "operationalHeadId=" + operationalHeadId + ", " : "") +
            "}";
    }

}

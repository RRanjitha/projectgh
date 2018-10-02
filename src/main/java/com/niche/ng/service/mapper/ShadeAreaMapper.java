/******************************************************************************
 *  Property of Nichehands
 *  Nichehands Confidential Proprietary
 *  Nichehands Copyright (C) 2018 All rights reserved
 *  ----------------------------------------------------------------------------
 *  Date: 2018/08/02
 *  Target: yarn
 *  -----------------------------------------------------------------------------
 *  File Description    : This file performs ShadeAreaMapper
 *
 *******************************************************************************/
package com.niche.ng.service.mapper;

import com.niche.ng.domain.*;
import com.niche.ng.service.dto.ShadeAreaDTO;

import org.mapstruct.*;
import java.util.List;
/**
 * Mapper for the entity ShadeArea and its DTO ShadeAreaDTO.
 */
@Mapper(componentModel = "spring", uses = {BatchMapper.class, FinancialYearSettingsMapper.class})
public interface ShadeAreaMapper extends EntityMapper<ShadeAreaDTO, ShadeArea> {

    @Mapping(source = "batch.id", target = "batchId")
    @Mapping(source = "batch.batchName", target = "batchBatchName")
    @Mapping(source = "financialYearShadeArea.id", target = "financialYearShadeAreaId")
    @Mapping(source = "financialYearShadeArea.batchName", target = "financialYearShadeAreaBatchName")
    ShadeAreaDTO toDto(ShadeArea shadeArea);

    @Mapping(source = "batchId", target = "batch")
    @Mapping(source = "financialYearShadeAreaId", target = "financialYearShadeArea")
    ShadeArea toEntity(ShadeAreaDTO shadeAreaDTO);

    List<ShadeAreaDTO> toDto(List<ShadeArea> shadeArea);

    default ShadeArea fromId(Long id) {
        if (id == null) {
            return null;
        }
        ShadeArea shadeArea = new ShadeArea();
        shadeArea.setId(id);
        return shadeArea;
    }
}

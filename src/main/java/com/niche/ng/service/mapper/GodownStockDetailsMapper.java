/******************************************************************************
 *  Property of Nichehands
 *  Nichehands Confidential Proprietary
 *  Nichehands Copyright (C) 2018 All rights reserved
 *  ----------------------------------------------------------------------------
 *  Date: 2018/08/02
 *  Target: yarn
 *  -----------------------------------------------------------------------------
 *  File Description    : This file performs GodownStockDetailsMapper
 *
 *******************************************************************************/
package com.niche.ng.service.mapper;

import com.niche.ng.domain.*;
import com.niche.ng.service.dto.GodownStockDetailsDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity GodownStockDetails and its DTO GodownStockDetailsDTO.
 */
@Mapper(componentModel = "spring", uses = {GodownStockMapper.class, FinancialYearSettingsMapper.class})
public interface GodownStockDetailsMapper extends EntityMapper<GodownStockDetailsDTO, GodownStockDetails> {

    @Mapping(source = "godownStock.id", target = "godownStockId")
    @Mapping(source = "financialYearGodownStockDetails.id", target = "financialYearGodownStockDetailsId")
    @Mapping(source = "financialYearGodownStockDetails.batchName", target = "financialYearGodownStockDetailsBatchName")
    GodownStockDetailsDTO toDto(GodownStockDetails godownStockDetails);

    @Mapping(source = "godownStockId", target = "godownStock")
    @Mapping(source = "financialYearGodownStockDetailsId", target = "financialYearGodownStockDetails")
    GodownStockDetails toEntity(GodownStockDetailsDTO godownStockDetailsDTO);

    List<GodownStockDetailsDTO> toDto(List<GodownStockDetails> godownStockDetails);

    default GodownStockDetails fromId(Long id) {
        if (id == null) {
            return null;
        }
        GodownStockDetails godownStockDetails = new GodownStockDetails();
        godownStockDetails.setId(id);
        return godownStockDetails;
    }
}

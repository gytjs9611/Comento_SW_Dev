package com.devfun.visualize_pilot;


import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.devfun.service.WineService;
import com.devfun.vo.WineVO;
import com.devfun.vo.QualityVO;
import com.devfun.vo.AvgVO;
import com.devfun.vo.AlcQualVO;
import com.devfun.vo.VolatileQualVO;

@RestController
public class restController {
    
    private static final Logger logger = LoggerFactory.getLogger(restController.class);
    
    @Inject
    private WineService service;
    
    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/wineList")
    public List<WineVO> wineList() throws Exception{
 
        logger.info("home");
        
        List<WineVO> wineList = service.selectWine();
        
        //model.addAttribute("movieList", movieList);
 
        return wineList;
    }
    
    @RequestMapping(value = "/qualityList")
    public List<QualityVO> qualityList() throws Exception{
 
        logger.info("home");
        
        List<QualityVO> qualityList = service.selectQuality();
        
 
        return qualityList;
    }
    
    @RequestMapping(value = "/avgList")
    public List<AvgVO> stdList() throws Exception{
 
        logger.info("home");
        
        List<AvgVO> avgList = service.selectAvg();
        
 
        return avgList;
    }
    
    
    @RequestMapping(value = "/alcQualList")
    public List<AlcQualVO> alcQualList() throws Exception{
 
        logger.info("home");
        
        List<AlcQualVO> alcQualList = service.selectAlcQual();
       
 
        return alcQualList;
    }
    
    @RequestMapping(value = "/volatileQualList")
    public List<VolatileQualVO> volatileQualList() throws Exception{
 
        logger.info("home");
        
        List<VolatileQualVO> volatileQualList = service.selectVolatileQual();
        
 
        return volatileQualList;
    }
    
}

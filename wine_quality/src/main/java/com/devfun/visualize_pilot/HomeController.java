package com.devfun.visualize_pilot;
 
import java.util.List;
import java.util.Locale;
 
import javax.inject.Inject;
 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
 
import com.devfun.vo.WineVO;
import com.devfun.vo.AvgVO;
import com.devfun.vo.QualityVO;
import com.devfun.vo.AlcQualVO;
import com.devfun.vo.VolatileQualVO;
import com.devfun.service.WineService;
 
/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
    
    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
    
    @Inject
    private WineService service;
    
    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(Locale locale, Model model) throws Exception{
 
        logger.info("home");
        
        List<WineVO> wineList = service.selectWine();
        List<QualityVO> qualityList = service.selectQuality();
        List<AvgVO> avgList = service.selectAvg();
        List<AlcQualVO> alcQualList = service.selectAlcQual();
        List<VolatileQualVO> volatileQualList = service.selectVolatileQual();
        
        model.addAttribute("wineList", wineList);
        model.addAttribute("qualityList", qualityList);
        model.addAttribute("avgList", avgList);
        model.addAttribute("alcQualList", alcQualList);
        model.addAttribute("volatileQualList", volatileQualList);
 
        return "home";
    }
    
}
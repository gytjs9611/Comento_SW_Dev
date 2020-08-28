package com.devfun.service;
 
import java.util.List;
 
import javax.inject.Inject;
 
import org.springframework.stereotype.Service;
 
import com.devfun.dao.WineDAO;
import com.devfun.vo.AlcQualVO;
import com.devfun.vo.QualityVO;
import com.devfun.vo.AvgVO;
import com.devfun.vo.VolatileQualVO;
import com.devfun.vo.WineVO;
 
@Service
public class WineServiceImpl implements WineService {
 
    @Inject
    private WineDAO dao;
    
    @Override
    public List<WineVO> selectWine() throws Exception {
 
        return dao.selectWine();
    }
    
    @Override
    public List<QualityVO> selectQuality() throws Exception{
    	return dao.selectQuality();
    }
    
    @Override
    public List<AvgVO> selectAvg() throws Exception{
    	return dao.selectAvg();
    }
    
    @Override
    public List<AlcQualVO> selectAlcQual() throws Exception{
    	return dao.selectAlcQual();
    }
    
    @Override
    public List<VolatileQualVO> selectVolatileQual() throws Exception{
    	return dao.selectVolatileQual();
    }
 
}

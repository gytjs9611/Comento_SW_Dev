package com.devfun.dao;
 
import java.util.List;
 
import com.devfun.vo.WineVO;
import com.devfun.vo.QualityVO;
import com.devfun.vo.AvgVO;
import com.devfun.vo.AlcQualVO;
import com.devfun.vo.VolatileQualVO;
 
public interface WineDAO {
    
    public List<WineVO> selectWine() throws Exception;
    public List<QualityVO> selectQuality() throws Exception;
    public List<AvgVO> selectAvg() throws Exception;
    public List<AlcQualVO> selectAlcQual() throws Exception;
    public List<VolatileQualVO> selectVolatileQual() throws Exception;
    
}
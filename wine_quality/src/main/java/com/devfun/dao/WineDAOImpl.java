package com.devfun.dao;

import java.util.List;

import javax.inject.Inject;
 
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.devfun.vo.AlcQualVO;
import com.devfun.vo.QualityVO;
import com.devfun.vo.AvgVO;
import com.devfun.vo.VolatileQualVO;
import com.devfun.vo.WineVO;
 
@Repository
public class WineDAOImpl implements WineDAO {
 
    @Inject
    private SqlSession sqlSession;
    
    private static final String Namespace = "com.devfun.mybatis.sql.test";
    
    @Override
    public List<WineVO> selectWine() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectWine");
    }
    
    @Override
    public List<QualityVO> selectQuality() throws Exception{
    	return sqlSession.selectList(Namespace+".selectQuality");
    }
    
    @Override
    public List<AvgVO> selectAvg() throws Exception{
    	return sqlSession.selectList(Namespace+".selectAvg");
    }
    
    
    @Override
    public List<AlcQualVO> selectAlcQual() throws Exception{
    	return sqlSession.selectList(Namespace+".selectAlcQual");
    	
    }
    
    @Override
    public List<VolatileQualVO> selectVolatileQual() throws Exception{
    	return sqlSession.selectList(Namespace+".selectVolatileQual");
    	
    }
 
}
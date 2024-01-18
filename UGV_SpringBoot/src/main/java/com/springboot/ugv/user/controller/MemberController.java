package com.springboot.ugv.user.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.springboot.ugv.user.model.MemberVO;
import com.springboot.ugv.user.service.MemberService;

@CrossOrigin
@Controller
public class MemberController {

	@Resource(name = "memberService")
	private MemberService memberService;
	
	/**
	 * 로그인
	 * @param memberVO
	 * @param request
	 * @param response
	 * @param session
	 * @param model
	 * @throws Exception
	 */
	@RequestMapping(value = "/loginAction.do")
	public @ResponseBody String loginAction(@ModelAttribute("memberVO") MemberVO memberVO, HttpServletRequest request, HttpServletResponse response, HttpSession session, Model model) throws Exception{
		String result = "N";
		
		try {
			MemberVO resultVO = memberService.selectMemberByIdByPw(memberVO);
			System.out.println("로그인 ------------");
			// 멤버의 정보가 있다면, 멤버의 이름을 리턴 처리합니다.
			if(resultVO != null) {
				System.out.println("로그인 합니다=-------------");
				result = resultVO.getMemberName();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}	
}

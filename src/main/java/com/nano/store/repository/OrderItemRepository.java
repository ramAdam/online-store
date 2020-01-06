package com.nano.store.repository;
import java.util.Optional;

import com.nano.store.domain.OrderItem;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the OrderItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

	Page<OrderItem> findAllByOrderCustomerUserLogin(String login, Pageable pageable);

	Optional<OrderItem> findByIdAndOrderCustomerUserLogin(Long id, String login);

}
